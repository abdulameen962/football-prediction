from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect,JsonResponse
from django.urls import reverse
from django.core.paginator import Paginator
from django.views.generic import View,ListView,DetailView
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
from rave_python import Rave,Misc,RaveExceptions
from allauth.account.signals import email_confirmed,email_confirmation_sent
from django.template.defaultfilters import slugify
from django.contrib.auth.mixins import UserPassesTestMixin
# from django.core.management.utils import get_random_secret_key
import time
from django.db.utils import OperationalError,ProgrammingError
from .models import *
from .flutterwave import checkPayment,rave
from .signals import *

admin.site.login = login_required(admin.site.login)
#handlers
def handler404(request, *args, **argv):
    response = render(request,'predictions/404.html')
    response.status_code = 404
    return response


def handler500(request, *args, **argv):
    response = render(request,'predictions/404.html')
    response.status_code = 500
    return response

def handler403(request, *args, **argv):
    response = render(request,'predictions/404.html')
    response.status_code = 403
    return response

def handler400(request, *args, **argv):
    response = render(request,'predictions/404.html')
    response.status_code = 400
    return response

try:
    leagues = League.objects.all()  
except (OperationalError, ProgrammingError) as e:
    leagues=[]



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
        #get leagues and tables
        leagues = League.objects.all()
        predictionstable = []
        if len(leagues) > 0:
            for league in leagues:
                leaguepredictions = league.prediction.all()
                if len(leaguepredictions) > 0:
                    mainleague = {"league":league,"predictions":[]}
                    for prediction in leaguepredictions:
                        if prediction.type == "freemium":
                                mainleague["predictions"].append(prediction)

                    predictionstable.append(mainleague)

        #limit the amount of predictions for a user
        if len(predictionstable) > 3:
            predictionstable = [predictionstable[0],predictionstable[1],predictionstable[2],predictionstable[3]]
        
        return render(request,"predictions/index.html",{
            "predictionstable": predictionstable,
        })


@login_required(login_url="account_login")
@verified_email_required
def Type(request):
    return render(request,"predictions/choose-type.html")

@login_required(login_url="account_login")
def not_verified(request):
    #confirm user doesn't have a verified email
    user = request.user
    emailuser = EmailAddress.objects.get(user=user)
    if emailuser.verified:
        return HttpResponseRedirect(reverse("index"))

    return render(request,"account/verified_email_required.html")

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
    paginate_by = 7
    

    def get_context_data(self, **kwargs):
       blogs = Blog.objects.all()
       paginated = Paginator(blogs,7)
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

def user_save(user,type):
    if user.type != type:
        user.type = type
        user.save()

@login_required(login_url="account_login")
@verified_email_required
def complete_signup(request,method):
    user = request.user
    if user.type == "":
        if method == "freemium":
            user_save(user,method)
            return HttpResponseRedirect(reverse("freemium"))
        elif method == "premium":
            user_save(user,method)
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
        if userprofile.activated:
            return HttpResponseRedirect(reverse("premium"))
            
    return render(request,"predictions/premium_signup.html")

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
                user_save(user,"premium")
                userprofile = PremiumProfile.objects.get(user=user)
            userprofile.activated = True
            userprofile.save()
            messages.success(request,"You have been activated as a premium user")
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
                            user_save(user,"freemium")
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
            if user.type == "premium":
                userprofile = PremiumProfile.objects.get(user=user)
                if userprofile.activated:
                    return HttpResponseRedirect(reverse("premium"))

            #for users not activated premium users of other users
            for plan in res:
                customer = plan["customer"]
                if user.email == customer["customer_email"] and plan["status"] == "cancelled":
                    rave.Subscriptions.activate(plan["id"])
                    status = True

            if status:
                #get premium profile
                user_save(user,"premium")
                userprofile = PremiumProfile.objects.get(user=user)
                userprofile.activated = True
                userprofile.save()
                messages.success(request,"You have been reactivated as a premium user")
                return HttpResponseRedirect(reverse("premium"))
            else:
                return HttpResponseRedirect(reverse("premium_payment"))
    except RaveExceptions.PlanStatusError as e:
        print(e.err)


@login_required(login_url="account_login")
@verified_email_required
def get_notification(request):
    user = request.user
    if user.type != "":
        notifications = user.notifications.all()
        notificationbox = []
        if len(notifications) > 0:
            if len(notifications) < 5:
                for notify in notifications:
                    notificationbox.append(notify)

            else:
                    notificationbox = [notifications[0],notifications[1],notifications[2],notifications[3],notifications[4]]


        if len(notificationbox) > 0:
            #mark all the notifications as read
            for notify in notificationbox:
                notify.read = True
                notify.save()

            return JsonResponse([notify.serialize() for notify in notificationbox],status=200,safe=False)

        else:
            return JsonResponse({"message":"No notifications yet"},status=200)

    else:
        return JsonResponse({"message":"User has no type yet"},status=403)


@login_required(login_url="account_login")
@verified_email_required
def update_notification(request):
    user = request.user
    if user.type != "":
        notifications = user.notifications.all()

        return JsonResponse({"number":len(notifications)},status=200)


class NotificationsView(UserPassesTestMixin,ListView):
    model = Notification
    template_name = "predictions/notifications.html"
    context_object_name = "notifications"

    login_url = "account_login"

    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.type != ""   


    def get_queryset(self):
        queryset = super().get_queryset()
        mainuser = self.request.user
        notifications = []
        for notify in queryset:
            users = notify.users.all()
            for user in users:
                if user.id == mainuser.id:
                    notifications.append(notify)

        return notifications
    

    def get_context_data(self, **kwargs):

       notifications = super().get_queryset()
       paginated = Paginator(notifications,15)
       context = super().get_context_data(**kwargs)

       context["max_num"] = paginated.num_pages
       context["page_request_var"] = "page"
       context["page_range"] = paginated.page_range

       return context


class edit_notification(UserPassesTestMixin,View):
    login_url = "account_login"

    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.type != ""  


    def put(self,request,id):
        #mark messages as read
        user = self.request.user

        try:
            notification = Notification.objects.get(id=id)
            
            #check if the user is part of the notification
            try:
                notification.users.get(id=user.id)
                try:
                    notification.read = True
                    notification.save()
                except Exception:
                    return JsonResponse({"message":"Notification couldn't be marked"},status=400)
            except User.DoesNotExist:
                return JsonResponse({"message":"User isn't part of the notification"},status=400)

        except Notification.DoesNotExist:
            return JsonResponse({"message":"invalid notification"},status=400)

        return JsonResponse({"message":"Marked successfully"},status=200) 

    def delete(self,request,id):
        user = self.request.user

        try:
            notification = Notification.objects.get(id=id)

            #check if the user is part of the notification
            try:
                notification.users.get(id=user.id)
                try:
                    notification.users.remove(user)
                    notification.save()
                except Exception:
                    return JsonResponse({"message":"User couldnt't be removed"},status=400)
            except User.DoesNotExist:
                return JsonResponse({"message":"User isn't part of the notification"},status=400)

        except Notification.DoesNotExist:
            return JsonResponse({"message":"invalid notification"},status=400)


        return JsonResponse({"message":"Removed successfully"},status=200)


class Search(UserPassesTestMixin,View):
    login_url = "account_login"

    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.type != ""  

    def post(self,request):
        user = self.request.user

        data = json.loads(request.body)
        command = data.get("command",)
        search_term = data.get("term",)

        if command == "league":
            result = []
            leagues = League.objects.all()
            if len(leagues) > 0:
                for league in leagues:
                    if search_term.lower() in league.league.lower():
                       result.append(league)

                    elif search_term.lower() in league.code.lower():
                        result.append(league)

                    if len(result) > 0:
                        #there is at league a result
                        main_result = []
                        for res in result:
                            link = request.build_absolute_uri(reverse('leagues',args=[res.id]))
                            res_add = {"league":res.league,"link":link}
                            main_result.append(res_add)

                        return JsonResponse([result for result in main_result],status=200,safe=False)
                else:
                    return JsonResponse({"message":"League doesn't exist"},status=201)
            else:
                return JsonResponse({"message":"No League available now"},status=201)

        elif command == "watchlist":
            if user.type == "freemium":
                #get his profile
                return JsonResponse({"message":"User denied access"},status=400)
            elif user.type == "premium":
                #get his profile
                profile = PremiumProfile.objects.get(user=user)

            if profile != "":
                watchlist = profile.watchlist.all()
                result = []
                if len(watchlist) > 0:
                    for watch in watchlist:
                        if search_term.lower() in watchlist.league.lower():
                            result.append(watch)

                    if len(result) > 0:
                        #there is at league a result
                        main_result = []
                        for res in result:
                            link = request.build_absolute_uri(reverse('leagues',args=[res.id]))
                            res_add = {"league":res.league,"link":link}
                            main_result.append(res_add)

                        return JsonResponse([result for result in main_result],status=200,safe=False)
                    else:
                        return JsonResponse({"message":"League doesn't exist"},status=201)

                else:
                    return JsonResponse({"message":"You have not added any watchlist"},status=201)                
            
            return JsonResponse({"message":"User doesn't have a type"},status=403)
        

        else:
            return JsonResponse({"message":"Wrong command/sth went wrong"},status=400)


class leagues(UserPassesTestMixin,ListView):
    model = League
    template_name = "predictions/all_leagues.html"
    context_object_name = "leagues"
    login_url = "account_login"
    
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.type != ""

    def get_context_data(self, **kwargs):

       leagues = super().get_queryset()
       paginated = Paginator(leagues,10)
       context = super().get_context_data(**kwargs)

       context["max_num"] = paginated.num_pages
       context["page_request_var"] = "page"
       context["page_range"] = paginated.page_range

       return context
    

@login_required(login_url="account_login")
@verified_email_required
def league_single(request,id):
    # user = request.user
    try:
        league = League.objects.get(pk=id)

        return render(request,"predictions/league_single.html",{
            "league": league,
        })

    except League.DoesNotExist:
        return HttpResponseRedirect(reverse("index"))


class get_leagues(UserPassesTestMixin,View):
    login_url = "account_login"

    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.type != ""

    def get(self,request,page_num):
        result = []
        user = self.request.user
        league = League.objects.all()
        league = Paginator(league,10)

        if page_num <= league.num_pages:
            league = league.get_page(page_num)

        else:
            return JsonResponse({"message":"Paginated leagues doesn't exist"},status=403)
        
        for league in league:
            predictions = league.prediction.all()

            main_league = {"league":league.serialize(),"predictions":[]}

            if predictions.count() > 0:
                for predict in predictions:
                    if predict.type == "freemium":
                        main_league["predictions"].append(predict.serialize())

                    elif predict.type == "premium" and user.type == "premium" and user.premium.activated:
                        main_league["predictions"].append(predict.serialize())

            
            if len(main_league["predictions"]) > 0:
                result.append(main_league)


        if len(result) > 0:
            return JsonResponse([predict for predict in result],safe=False,status=200)

        else:
            return JsonResponse({"message":"No available leagues"},status=201)



@login_required(login_url="account_login")
@verified_email_required
def get_league_info(request,method,league_id):
    user = request.user
    term = method.lower()

    if request.method != "GET":
        return JsonResponse({"message":"Wrong method"},status=400)

    try:
        league = League.objects.get(id=league_id)
        predictions = league.prediction.all()
    except League.DoesNotExist:
        return JsonResponse({"message":"Wrong page"},status=400)


    if len(predictions) > 0:
        status = False
        if term == "correct_score":
            status = True

        elif term == "halftime_correct_score":
            status = True

        elif term == "combo_draws":
            status = True
        
        elif term == "combo_tickets":
            status = True

        else:
            return JsonResponse({"message":"Wrong method"},status=403)


        if status:
            #get all the predictions to check if it has the term
            main_league = {"league":league.serialize(),"predictions":[]}

            for predict in predictions:
                if predict.type == "freemium":

                    if term == "correct_score":
                        if predict.correct_score != "" or predict.correct_score == "Empty":
                            main_league["predictions"].append(predict.serialize())
                    elif term == "halftime_correct_score":
                        if predict.halftime_correct_score != "" or predict.halftime_correct_score == "Empty":
                            main_league["predictions"].append(predict.serialize())

                    elif term == "combo_draws":
                        if predict.combo_draws != "" or predict.combo_draws == "Empty":
                            main_league["predictions"].append(predict.serialize())
                    
                    elif term == "combo_tickets":
                        if predict.combo_tickets != "" or predict.combo_tickets == "Empty":
                            main_league["predictions"].append(predict.serialize())
                    

                elif predict.type == "premium" and user.type == "premium" and user.premium.activated:

                    if term == "correct_score":
                        if predict.correct_score != "" or predict.correct_score == "Empty":
                            main_league["predictions"].append(predict.serialize())
                    elif term == "halftime_correct_score":
                        if predict.halftime_correct_score != "" or predict.halftime_correct_score == "Empty":
                            main_league["predictions"].append(predict.serialize())

                    elif term == "combo_draws":
                        if predict.combo_draws != "" or predict.combo_draws == "Empty":
                            main_league["predictions"].append(predict.serialize())
                    
                    elif term == "combo_tickets":
                        if predict.combo_tickets != "" or predict.combo_tickets == "Empty":
                            main_league["predictions"].append(predict.serialize())

        if len(main_league["predictions"]) > 0:
            return JsonResponse({"result":main_league},status=200,safe=False)

        else:
            return JsonResponse({"message":"No requested info available for this league"},status=201)


    else:
        return JsonResponse({"message":"No prediction exists for the league requested"},status=201)


@login_required(login_url="account_login")
@verified_email_required
def add_watchlist(request,id):
    user = request.user
    if request.method == "PUT":
        try:
            watchlist = League.objects.get(pk=id)

        except League.DoesNotExist:
            return JsonResponse({"message":"Invalid league"},status=400)

        if user.type != "premium" and user.premium.activated:
            return JsonResponse({"message":"User not allowed"},status=403)

        try:
            profile = PremiumProfile.objects.get(user=user)
            profile.watchlist.add(watchlist)
            profile.save()
        except Exception or PremiumProfile.DoesNotExist: 
            return JsonResponse({"message":"Something wrong happened try again later"},status=400)

        return JsonResponse({"message":"Watchlist added successfully"},status=200)


    elif request.method == "DELETE":
        try:
            watchlist = League.objects.get(pk=id)

        except League.DoesNotExist:
            return JsonResponse({"message":"Invalid league"},status=400)

        if user.type != "premium" and user.premium.activated:
            return JsonResponse({"message":"User not allowed"},status=403)

        try:
            profile = PremiumProfile.objects.get(user=user)
            profile.watchlist.get(id=watchlist.id)
            profile.watchlist.remove(watchlist)
            profile.save()
        except Exception or PremiumProfile.DoesNotExist or League.DoesNotExist: 
            return JsonResponse({"message":"Something wrong happened try again later/watchlist isn't added"},status=400)

        return JsonResponse({"message":"Watchlist removed successfully"},status=200)

    else:
        return JsonResponse({"message":"Failed request method"},status=400)



class watchlist(UserPassesTestMixin,ListView):
    login_url = "index"
    model = League
    template_name = "predictions/watchlist.html"
    context_object_name = "leagues"

    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.type == "premium" and self.request.user.premium.activated

    def get_queryset(self):
        user = self.request.user
        watchlist = user.premium.watchlist.all()

        return watchlist
    

    def get_context_data(self, **kwargs):
       leagues = super().get_queryset()
       paginated = Paginator(leagues,10)
       context = super().get_context_data(**kwargs)

       context["max_num"] = paginated.num_pages
       context["page_request_var"] = "page"
       context["page_range"] = paginated.page_range

       return context
    
