from django.db.models.signals import pre_save,post_save,pre_delete,post_delete
from django.dispatch import receiver
from .models import *
from django.template.defaultfilters import slugify
from allauth.account.models  import EmailAddress
from django.conf import settings
from datetime import datetime
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.core.mail import send_mail,send_mass_mail,EmailMessage
from django.utils import timezone

def send_notification(header,users,message):
    #check if one has been sent before
    header = header
    message = message
    
    try:
        Notification.objects.get(header=header)
    except Notification.DoesNotExist:
        newnotification = Notification.objects.create(header=header,message=message,created=timezone.now())
        if len(users) > 0:
            for user in users:
                newnotification.users.add(user)


def delete_notification(header,message):
    #check if one has been sent before
    header = header
    message = message
    
    try:
        notification = Notification.objects.get(header=header,message=message)
        notification.delete()
    except Notification.DoesNotExist:
        header = ""

@receiver(pre_save,sender=Blog)
def blog_handler(sender,instance,**kwargs):

    #check if the blog exists and the number
    # text=""
    # numbers=""
    count = 0
    # for i in instance.title:
    #     if(i.isdigit()):
    #         numbers+=i
    #     else:
    #         text+=i

    blogs = Blog.objects.all()
    for blog in blogs:
        if instance.title in blog.title:
            count += 1

    if count > 0:
        instance.title = f"{instance.title} {count}"
        instance.slug = (slugify(instance.title))
    else:
        instance.slug = (slugify(instance.title))

    header = f"New blog {instance.title}"
    message = f"A new blog has been released titled: {instance.title},<a href='/blogs/{instance.slug}/'>Check it out now</a>"
    users = []
    mainusers = User.objects.all()

    for user in mainusers:
        if user.type != "":
            users.append(user)

    
    if instance.state == "published":
        send_notification(header,users,message)


@receiver(pre_delete,sender=Blog)
def blog_delete_handler(sender,instance,**kwargs):
    header = f"New blog {instance.title}"
    message = f"A new blog has been released titled: {instance.title},<a href='/blogs/{instance.slug}/'>Check it out now</a>"
    delete_notification(header,message)

@receiver(post_save,sender=User)
def user_handler(sender, instance,**kwargs):
    #check if user has a type,if he doesn't send an email,if he does create appropriate profile
    try:
        emailuser = EmailAddress.objects.get(user=instance)
        if instance.type != "" and emailuser.verified:
            if instance.type == "freemium":
                #create freemium profile
                try:
                    FreemiumProfile.objects.get(user=instance)
                except FreemiumProfile.DoesNotExist:
                   FreemiumProfile.objects.create(user=instance)
            elif instance.type == "premium":
                #create premium profile
                try:
                    PremiumProfile.objects.get(user=instance)
                except PremiumProfile.DoesNotExist:
                   PremiumProfile.objects.create(id=instance.id,user=instance)

    except EmailAddress.DoesNotExist:
        status = False        

    today = timezone.now()
    today = timezone.localtime(today)
    today = today.strftime("%m/%d/%Y %I:%M %p")
    today = datetime.strptime(today,"%m/%d/%Y %I:%M %p")
    date_joined = instance.date_joined
    date_joined = timezone.localtime(date_joined)
    date_joined = date_joined.strftime("%m/%d/%Y %I:%M %p")
    date_joined = datetime.strptime(date_joined,"%m/%d/%Y %I:%M %p")
    difference = today - date_joined
    difference = difference.total_seconds()
    
    #convert to a minute
    difference = difference / 60
    if difference <= 1:
        #send the email
        html_message = render_to_string("predictions/welcome-mail.html",{"username":instance.username})
        plain_message = strip_tags(html_message)
        #check if the user has an email address
        if instance.email != "":
            send_mail(message=plain_message, from_email=settings.EMAIL_HOST_USER,subject=f"Welcome to Frankly Prediction {instance.username.upper()}",recipient_list=[instance.email],fail_silently=False,html_message=html_message)
        else:
            return ""

        #check if one has been sent before
        header = f"Welcome {instance.username}"
        message = "Welcome to the Prediction app,we hope you enjoy this platform.Take a tour and if our help is needed contact support"

        send_notification(header,[instance],message)
@receiver(pre_delete,sender=User)
def user_delete_handler(sender,instance,**kwargs):
    header = f"Welcome {instance.username}"
    message = "Welcome to the Prediction app,we hope you enjoy this platform.Take a tour and if our help is needed contact support</a>"
    delete_notification(header,message)

#signal for change from freemium to premium
@receiver(pre_save,sender=PremiumProfile)
def premium_profile_handler(sender,instance,**kwargs):
    #if the user had a freemium acccount,delete it
    user = instance.user
    try:
        freemium = FreemiumProfile.objects.get(user=user)
        #here to transfer details
        #remove all present ones
        if len(freemium.watchlist.all())> 0:
            for watch in freemium.watchlist.all():
                freemium.watchlist.remove(watch)
            

        if len(instance.watchlist.all()) > 0:
            for watch in instance.watchlist.all():
                freemium.watchlist.add(watch)

        # freemium.delete()
    except FreemiumProfile.DoesNotExist:
        freemium = ""

#signal for change from premium to freemium
@receiver(pre_delete,sender=PremiumProfile)
def premium_profile_delete_handler(sender,instance,**kwargs):
    #to create a freemium account for user
    user = instance.user
    try:
        freemium = FreemiumProfile.objects.get(user=user)
        #here to transfer details
    except FreemiumProfile.DoesNotExist:
        freemium = FreemiumProfile.objects.create(id=user.id,user=user)

    freemium = FreemiumProfile.objects.get(user=user)
    
    #transfer details
    if len(freemium.watchlist.all())> 0:
        for watch in freemium.watchlist.all():
            freemium.watchlist.remove(watch)
        

    if len(instance.watchlist.all()) > 0:
        for watch in instance.watchlist.all():
            freemium.watchlist.add(watch)


#signal for sending emails for new predictions to all premium users on it
@receiver(post_save,sender=Prediction)
def prediction_mail_handler(sender,instance,**kwargs):
    #check if prediction is marked
    if instance.correct_score == "" and instance.halftime_correct_score == "" and instance.combo_draws == "" and instance.combo_tickets == "":
        instance.delete()

        
    users = []
    if instance.send_mail:
        premiums = instance.league.premium_leagues.all()
        if len(premiums) > 0:
            for premium_user in premiums:
                if premium_user.activated:
                    users.append(premium_user.user)


    html_message = render_to_string("predictions/newprediction.html",{"users":users,"name":instance.league.league})
    plain_message = strip_tags(html_message)
    emails = []

    if len(users) > 0:
        for user in users:
            if user.email != "":
                emails.append(user.email)


    if len(emails) > 0:
        subject = f"New prediction dropped for {instance.league.league}"
        send_mail(subject=subject,message=plain_message, from_email=settings.EMAIL_HOST_USER,recipient_list=emails, fail_silently=False,html_message=html_message)


    #check if one has been sent before
    header = f"New prediction: {instance.home} vs {instance.away} in {instance.league.league} league"
    message = f"A new prediction just came in,hurry now to check it at <a href='/leagues/{instance.league.id}/current/'>{instance.home} vs {instance.away}</a>"
    send_notification(header,users,message)

@receiver(post_save,sender=Notification)
def notification_saver_handler(sender,instance,**kwargs):
    #check if it is a removal
    users = instance.users.all()
    if len(users) < 0:
        #user list is empty,delete list
        instance.delete()

@receiver(pre_save,sender=SocialLinks)
def social_links_handler(sender,instance,**kwargs):
    #check if all the fields are current
    if instance.twitter_link == "":
        instance.twitter_link = "#"

    if instance.facebook_link == "":
        instance.facebook_link = "#"

    if instance.whatsapp_link == "":
        instance.whatsapp_link = "#"

    if instance.linkedin_link == "":
        instance.linkedin_link = "#"


@receiver(post_save,sender=Completed_Predictions)
def completed_predictions_handler(sender,instance,**kwargs):
    #check if the email has been sent
    subject = f"A new prediction from {instance.league.league} has been moved to completed"
    message = f"A new message has been marked {instance.prediction_status},pls come to the dashboard to specify the prediction status"
    send_mail(message=message, from_email=settings.EMAIL_HOST_USER,subject=subject,recipient_list=[settings.EMAIL_HOST_USER],fail_silently=False)
