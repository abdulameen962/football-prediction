from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect,JsonResponse
from django.urls import reverse
from django.core.paginator import Paginator
from django.views.generic import View,ListView
from django.core.mail import send_mail
from allauth.account.decorators import verified_email_required
from django.db.models.signals import pre_save,post_save,pre_delete,post_delete
from django.dispatch import receiver
from django.contrib.auth.decorators import login_required
from django.contrib import messages
import json
from allauth.account.models  import EmailAddress
from django.contrib.sites.shortcuts import get_current_site
from django.conf import settings
from django.contrib import admin
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from allauth.account.signals import email_confirmed,email_confirmation_sent
from django.template.defaultfilters import slugify
import time
from .models import *
from .flutterwave import checkPayment

admin.site.login = login_required(admin.site.login)
#signal for login,welcome email and create profile
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
                    PremiumProfile.objects.create(user=instance)

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
        FreemiumProfile.objects.create(user=user)

    freemium = FreemiumProfile.objects.get(user=user)
    #transfer details

def index(request):
    user = request.user

    if user.is_authenticated:
        emailuser = EmailAddress.objects.get(user=user)
       #check if user email is verified
        if emailuser.verified:
            if user.type == "":
                #render for user to choose type of account
                return HttpResponseRedirect(reverse("type")) 
            else:
                if user.type == "freemium":
                    return HttpResponseRedirect(reverse("freemium"))

                elif user.type == "premium":
                    try:
                        userprofile = PremiumProfile.objects.get(user=user)
                    except PremiumProfile.DoesNotExist:
                        userprofile = PremiumProfile(user=user)
                        userprofile.save()

                    if userprofile.activated:
                        return HttpResponseRedirect(reverse("premium"))
                    else:
                        return HttpResponseRedirect(reverse("confirm_payment"))
        else:
            messages.error(request,"Email not verified,pls check your email for verification link")
            return HttpResponseRedirect(reverse("not_verified"))

    else:
        return render(request,"predictions/index.html")


@login_required(login_url="account_login")
@verified_email_required
def Type(request):
    return render(request,"predictions/choose-type.html")

@login_required(login_url="account_login")
@verified_email_required
def Freemiumview(request):
    user = request.user
    if user.type == "freemium":
        return render(request,"predictions/freemium.html")
    else:
        return HttpResponseRedirect(reverse("index"))
            

@login_required(login_url="account_login")
@verified_email_required
def Premiumview(request):
    user = request.user
    if user.type == "premium":
        userprofile = PremiumProfile.objects.get(user=user)
        action = checkPayment(user)
        if userprofile.activated:
            if action == False:
                userprofile.activated = False
                userprofile.save()
                user.type = "freemium"
                user.save()
                messages.error(request,"Your subscription plan has been cancelled,you have been returned to a freemium user.If error,kindly contact support")
                return HttpResponseRedirect(reverse("freemium"))
            else:
                return render(request,"predictions/premium.html")
        else:
            if action == True:
                userprofile.activated = action
                userprofile.save()
                return render(request,"predictions/premium.html")
            else:
                user.type = "freemium"
                user.save()
                messages.error(request,"Your subscription plan has not been activated,if you have subscribed,contact support to activate you")
                return HttpResponseRedirect(reverse("freemium"))
    else:
        return HttpResponseRedirect(reverse("confirm_payment"))

class Blogview(ListView):
    model = Blog
    template_name = "predictions/blogs.html"
    context_object_name = 'blogs'
    paginate_by = 10
    

    def get_context_data(self, **kwargs):
       blogs = Blog.objects.all()
       paginated = Paginator(blogs,10)
       context = super().get_context_data(**kwargs)
       context["max_num"] = paginated.num_pages
       context["page_request_var"] = "page"
       context["page_range"] = paginated.page_range

       return context


class BlogDetail(View):
    def get(self,request,slug):
        blog = Blog.objects.get(slug=slug)
        return render(request,"predictions/blog_detail.html",{
            "blog": blog,
        })


# def not_verified(request):
#     user = request.user
#     if user.is_authenticated and user.is_email_verified == False:
#         return render(request,"predictions/not_verified.html")
#     else:
#         return HttpResponseRedirect(reverse("index"))


@login_required(login_url="account_login")
@verified_email_required
def complete_signup(request,method):
    user = request.user
    if user.type != "":
        if method == "freemium":
            user.type = method
            user.save()
            return HttpResponseRedirect(reverse("freemium"))
        elif method == "premium":
            user.type = method
            user.save()
            return HttpResponseRedirect(reverse("premium_payment"))
        else:
            messages.error(request,"Invalid type method,pls retry or contact support")
            return HttpResponseRedirect("type")
    else:
        return HttpResponseRedirect(reverse("index"))



@login_required(login_url="account_login")
@verified_email_required
def premium_payment(request):
    user = request.user
    if user.type == "premium":
        userprofile = PremiumProfile.objects.get(user=user)
        if userprofile.activated == False:
            return render(request,"predictions/premium_signup.html")
        else:
            return HttpResponseRedirect(reverse("premium"))
    else:
         return HttpResponseRedirect(reverse("index"))

@login_required(login_url="account_login")
@verified_email_required
def confirm_payment(request):
    user = request.user
    #add subscription
    try:
        action = checkPayment(user)
        if action == False:
            messages.error(request,"User doesn't have an active subscription")
            return HttpResponseRedirect(reverse("premium_payment"))
        else:
            #user is activated
            try:
               userprofile = PremiumProfile.objects.get(user=user)
            except PremiumProfile.DoesNotExist:
                user.type = "premium"
                user.save()
                userprofile = PremiumProfile.objects.get(user=user)
            userprofile.activated = True
            userprofile.save()
            return HttpResponseRedirect(reverse("premium"))
    except RaveExceptions.PlanStatusError as e:
        print(e.err)
   

@login_required(login_url="account_login")
@verified_email_required
def cancel_subscription(request):
    user = request.user
    if user.type == "premium":
        userprofile = PremiumProfile.objects.get(user=user)
        if userprofile.activated:
            action = checkPayment(user)
            if action == True:
                try:
                    res = rave.Subscriptions.all()
                    if len(res) > 0:
                        res = res["returnedData"]
                        res = res["data"]
                        res = res["plansubscriptions"]
                        status = False
                        for plan in res:
                            customer = plan["customer"]
                            if user.email == customer["customer_email"] and plan["status"] == "active":
                                rave.Subscriptions.cancel(plan["id"])
                                status = True

                        if status:
                            userprofile.activated = False
                            user.type = "freemium"
                            user.save()
                            userprofile.save()
                            messages.success(request,"Your subscription has been cancelled and you have been turned to a freemium user")
                            return HttpResponseRedirect(reverse("freemium"))
                except RaveExceptions.PlanStatusError as e:
                    print(e.err)
            else:
                messages.error(request,"User doesn't have an active subscription")
                return HttpResponseRedirect(reverse("premium_payment"))
    messages.error(request,"User doesn't have an active subscription")
    return HttpResponseRedirect(reverse("premium_payment"))

@login_required(login_url="account_login")
@verified_email_required
def activate_subscription(request):
    user = request.user
    try:
        res = rave.Subscriptions.all()
        if len(res) > 0:
            res = res["returnedData"]
            res = res["data"]
            res = res["plansubscriptions"]
            status = False
            for plan in res:
                customer = plan["customer"]
                if user.email == customer["customer_email"] and plan["status"] != "active":
                    rave.Subscriptions.activate(plan["id"])
                    status = True

            if status:
                #get premium profile
                user.type = "premium"
                user.save()
                userprofile = PremiumProfile.objects.get(user=user)
                userprofile.activated = True
                userprofile.save()
                messages.success(request,"You have been reactivated as a premium user")
                return HttpResponseRedirect(reverse("premium"))
            else:
                if user.type == "premium":
                    userprofile = PremiumProfile.objects.get(user=user)
                    if userprofile.activated:
                        return HttpResponseRedirect(reverse("premium"))
                return HttpResponseRedirect(reverse("premium_payment"))
    except RaveExceptions.PlanStatusError as e:
        print(e.err)