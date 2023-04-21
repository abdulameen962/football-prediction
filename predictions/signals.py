from django.db.models.signals import pre_save,post_save,pre_delete,post_delete
from django.dispatch import receiver
from .models import *
from django.template.defaultfilters import slugify
from allauth.account.models  import EmailAddress
from django.conf import settings
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.core.mail import send_mail,send_mass_mail


@receiver(pre_save,sender=Blog)
def blog_handler(sender,instance,**kwargs):
    instance.slug = (slugify(instance.title))

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

        elif instance.type == "" and emailuser.verified == False:
            #send the email
            html_message = render_to_string("predictions/welcome-mail.html",{"username":instance.username})
            plain_message = strip_tags(html_message)
            #check if the user has an email address
            if instance.email != "":
                send_mail(message=plain_message, from_email=settings.EMAIL_HOST_USER,subject=f"Welcome to Frankly Prediction {instance.username}",recipient_list=[instance.email],fail_silently=False,html_message=html_message)
            else:
                return ""

    except EmailAddress.DoesNotExist:
        #signed in through socials
        emailuser = ""

#signal for change from freemium to premium
@receiver(pre_save,sender=PremiumProfile)
def premium_profile_handler(sender,instance,**kwargs):
    #if the user had a freemium acccount,delete it
    user = instance.user
    try:
        freemium = FreemiumProfile.objects.get(user=user)
        #here to transfer details
        #remove all present ones
        if len(freemium.watchlist.all()) > 0:
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


#signal for sending emails for new predictions to all premium users on it
@receiver(post_save,sender=Prediction)
def prediction_mail_handler(sender,instance,**kwargs):
    #check if prediction is marked
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
        send_mass_mail(subject=f"New prediction dropped for {instance.league.league}",message=plain_message, from_email=settings.EMAIL_HOST_USER,recipient_list=emails, fail_silently=False,html_message=html_message)


