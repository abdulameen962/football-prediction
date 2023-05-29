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
from django.contrib.auth import login,logout,authenticate
import json
import urllib3
from urllib.request import urlopen
from allauth.account.models  import EmailAddress
from django.contrib.sites.shortcuts import get_current_site
from django.conf import settings
from django.contrib import admin
from django.utils.datastructures import MultiValueDictKeyError
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

leagues_live_scores = [
    {
        "name": "all",
        "display": "All leagues",
        "id": 10000000000,
    },
    {
        "name": "La-Liga",
        "display": "La Liga",
        "id": 3,
    },
    {
        "name": "English-Premier-League",
        "display": "English Premier League",
        "id": 2,
    },
    {
        "name": "Bundesliga",
        "display": "Bundesliga",
        "id": 1,
    },
    {
        "name": "Serie-A",
        "display": "Serie A",
        "id": 4,
    },
    {
        "name": "Ligue-1",
        "display": "Ligue 1",
        "id": 5,
    },
    {
        "name": "Eredivisie",
        "display": "Eredivisie",
        "id": 196,
    },
    {
        "name": "Russian-Premier-League",
        "display": "Russian Premier League",
        "id": 7,
    },
    {
        "name": "Mexico-Liga-MX",
        "display": "Mexico's Liga MX",
        "id": 45,
    },
    {
        "name": "Turkish-Süper-Lig",
        "display": "Turkish Süper Lig",
        "id": 6,
    },
    {
        "name": "Ukranian-Premier-League",
        "display": "Ukranian Premier League",
        "id": 64,
    },
    {
        "name": "Colombia-Categoria-Primera-A",
        "display": "Colombia's Categoria Primera A",
        "id": 51,
    },
    {
        "name": "Uruguayan-Primera-Division",
        "display": "Uruguayan Primera Division",
        "id": 48,
    },
    {
        "name": "Superleague-Greece",
        "display": "Superleague Greece",
        "id": 9,
    },
    {
        "name": "Romania-Liga-I",
        "display": "Romania's Liga I",
        "id": 61,
    },
    {
        "name": "Peruvian-Primera-Division",
        "display": "Peruvian Primera Division",
        "id": 47,
    },
]

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
                leaguepredictions = league.completed_predictions.all()
                if len(leaguepredictions) > 0:
                    mainleague = {"league":league,"predictions":[]}
                    for prediction in leaguepredictions:
                        if prediction.type == "freemium":
                                mainleague["predictions"].append(prediction)

                    if len(predictionstable) < 6:
                        predictionstable.append(mainleague)

        
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
        leagues = League.objects.all()
        hot_league_list = []
        if leagues.count() > 1:
            for league1 in leagues:
                for league2 in leagues:
                    if len(league1.prediction.filter(type="freemium")) > len(league2.prediction.filter(type="freemium")) and len(hot_league_list) < 6 and league1.serialize() not in hot_league_list:
                        hot_league_list.append(league1.serialize())

        elif leagues.count() == 1:
            hot_league_list.append(leagues.first().serialize())

        predictions = Prediction.objects.filter(type="freemium")
        hot_prediction_list = []
        for predict in predictions:
            if len(hot_prediction_list) < 6:
                hot_prediction_list.append(predict.serialize())

        return render(request,"predictions/freemium.html",{
            "hot_leagues":hot_league_list,
            "hot_predictions": hot_prediction_list,
        })
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
            if action == True:
                userprofile.activated = action
                userprofile.save()
            else:
                user.type = "freemium"
                user.save()
                messages.error(request,"Your subscription plan has not been activated,if you have subscribed,contact support to activate you")
                return HttpResponseRedirect(reverse("freemium"))
    else:
        return HttpResponseRedirect(reverse("confirm_payment"))

    leagues = League.objects.all()
    hot_league_list = []
    if leagues.count() > 1:
        for league1 in leagues:
            for league2 in leagues:
                if len(league1.prediction.all()) > len(league2.prediction.all()) and len(hot_league_list) < 6 and league1.serialize() not in hot_league_list:
                    hot_league_list.append(league1.serialize())

    elif leagues.count() == 1:
        hot_league_list.append(leagues.first().serialize())

    predictions = Prediction.objects.all()
    hot_prediction_list = []
    for predict in predictions:
        if len(hot_prediction_list) < 6:
            hot_prediction_list.append(predict.serialize())


    return render(request,"predictions/premium.html",{
        "hot_leagues": hot_league_list,
        "hot_predictions": hot_prediction_list,
    })

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
            
    return render(request,"predictions/premium_signup.html",{
        "payment_links": PaymentLinks.objects.all()
    })

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
            if len(res) > 0:
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
    if len(user.type) > 0:
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
    if len(user.type) > 0:
        main_notify = []
        notifications = user.notifications.all()
        for notify in notifications:
            if notify.read == False:
                main_notify.append(notify)

        return JsonResponse({"number":len(main_notify)},status=200)


class NotificationsView(UserPassesTestMixin,ListView):
    model = Notification
    template_name = "predictions/notifications.html"
    context_object_name = "notifications"
    paginate_by = 15

    login_url = "account_login"

    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.type != "" and self.request.user.type is not None   


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
        queryset = super().get_queryset()
        mainuser = self.request.user
        notifications = []
        for notify in queryset:
            users = notify.users.all()
            for user in users:
                if user.id == mainuser.id:
                    notifications.append(notify)

        context = super().get_context_data(**kwargs)

        if len(notifications)> 0:
            for notify in notifications:
                notify.read = True
                notify.save()

            paginated = Paginator(notifications,15)
            context["max_num"] = paginated.num_pages
            context["page_range"] = paginated.page_range

            context["page_request_var"] = "page"

        return context


class edit_notification(UserPassesTestMixin,View):
    login_url = "account_login"

    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.type != "" and self.request.user.type is not None  


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
        return self.request.user.is_authenticated and self.request.user.type != "" and self.request.user.type is not None

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
                    if search_term.lower() in league.league.lower() and league.prediction.all().count() > 0:
                       result.append(league)

                    elif search_term.lower() in league.code.lower() and league.prediction.all().count() > 0:
                        result.append(league)

                if len(result) > 0:
                    #there is at league a result
                    main_result = []
                    for res in result:
                        link = request.build_absolute_uri(reverse('leagues',args=[res.id,'current']))
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

            watchlist = profile.watchlist.all()
            result = []
            if len(watchlist) > 0:
                for watch in watchlist:
                    if search_term.lower() in watch.league.lower() and watch.prediction.all().count() > 0:
                        result.append(watch)

                    elif search_term.lower() in watch.code.lower() and watch.prediction.all().count() > 0:
                        result.append(watch)

                if len(result) > 0:
                    #there is at league a result
                    main_result = []
                    for res in result:
                        link = request.build_absolute_uri(reverse('leagues',args=[res.id,'current']))
                        res_add = {"league":res.league,"link":link}
                        main_result.append(res_add)

                    return JsonResponse([result for result in main_result],status=200,safe=False)
                else:
                    return JsonResponse({"message":"League doesn't exist"},status=201)

            else:
                return JsonResponse({"message":"You have not added any watchlist"},status=201)                
                    

        else:
            return JsonResponse({"message":"Wrong command/sth went wrong"},status=400)


class leagues(UserPassesTestMixin,ListView):
    model = League
    template_name = "predictions/all_leagues.html"
    context_object_name = "leagues_page"
    login_url = "account_login"
    paginate_by = 10
    
    
    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.type != "" and self.request.user.type is not None

    def get_context_data(self, **kwargs):

       leagues = League.objects.all()
       paginated = Paginator(leagues,10)
       context = super().get_context_data(**kwargs)
       state = self.kwargs.get("state")

       context["max_num"] = paginated.num_pages
       context["page_request_var"] = "page"
       context["page_range"] = paginated.page_range
       context["page_type"] = state

       return context
    

@login_required(login_url="account_login")
@verified_email_required
def league_single(request,id,state):
    # user = request.user
    try:
        league = League.objects.get(pk=id)

        return render(request,"predictions/league_single.html",{
            "league": league,
            "page_type": state,
        })

    except League.DoesNotExist:
        return HttpResponseRedirect(reverse("index"))


# class get_leagues(UserPassesTestMixin,View):
#     login_url = "account_login"

#     def test_func(self):
#         return self.request.user.is_authenticated and self.request.user.type != ""

#     def get(self,request,page_num):
#         result = []
#         user = self.request.user
#         league = League.objects.all()
#         league = Paginator(league,10)

#         if page_num <= league.num_pages:
#             league = league.get_page(page_num)

#         else:
#             return JsonResponse({"message":"Paginated leagues doesn't exist"},status=403)
        
#         for league in league:
#             predictions = league.prediction.all()

#             main_league = {"league":league.serialize(),"predictions":[]}

#             if predictions.count() > 0:
#                 for predict in predictions:
#                     if predict.type == "freemium":
#                         main_league["predictions"].append(predict.serialize())

#                     elif predict.type == "premium" and user.type == "premium" and user.premium.activated:
#                         main_league["predictions"].append(predict.serialize())

            
#             if len(main_league["predictions"]) > 0:
#                 result.append(main_league)


#         if len(result) > 0:
#             return JsonResponse([predict for predict in result],safe=False,status=200)

#         else:
#             return JsonResponse({"message":"No available leagues"},status=201)



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
                        if predict.correct_score != "" and predict.correct_score is not None:
                            main_league["predictions"].append(predict.serialize())
                    elif term == "halftime_correct_score":
                        if predict.halftime_correct_score != "" and predict.halftime_correct_score is not None:
                            main_league["predictions"].append(predict.serialize())

                    elif term == "combo_draws":
                        if predict.combo_draws != "" and predict.combo_draws is not None:
                            main_league["predictions"].append(predict.serialize())
                    
                    elif term == "combo_tickets":
                        if predict.combo_tickets != "" and predict.combo_tickets is not None:
                            main_league["predictions"].append(predict.serialize())
                    

                elif predict.type == "premium" and user.type == "premium" and user.premium.activated:

                    if term == "correct_score":
                        if predict.correct_score != "" and predict.correct_score is not None:
                            main_league["predictions"].append(predict.serialize())
                    elif term == "halftime_correct_score":
                        if predict.halftime_correct_score != "" and predict.halftime_correct_score is not None:
                            main_league["predictions"].append(predict.serialize())

                    elif term == "combo_draws":
                        if predict.combo_draws != "" and predict.combo_draws is not None:
                            main_league["predictions"].append(predict.serialize())
                    
                    elif term == "combo_tickets":
                        if predict.combo_tickets != "" and predict.combo_tickets is not None:
                            main_league["predictions"].append(predict.serialize())

        if len(main_league["predictions"]) > 0:
            if user.type == "freemium":
                for main in main_league["predictions"]:
                    main[term] = "?"

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
    context_object_name = "leagues_page"
    paginate_by = 10

    def test_func(self):
        return self.request.user.is_authenticated and self.request.user.type == "premium" and self.request.user.premium.activated

    def get_queryset(self):
        user = self.request.user
        watchlist = user.premium.watchlist.all()

        return watchlist
    

    def get_context_data(self, **kwargs):
       leagues = self.request.user.premium.watchlist.all()
       context = super().get_context_data(**kwargs)
       state = self.kwargs.get("state")

       if len(leagues) > 0:
            paginated = Paginator(leagues,10)

            context["max_num"] = paginated.num_pages
            context["page_range"] = paginated.page_range
            context["page_type"] = state
            context["page_request_var"] = "page"

       return context
    

@login_required(login_url="account_login")
@verified_email_required
def profile(request):
    user = request.user
    if request.method == "GET":
        return render(request,"predictions/profile.html")


    elif request.method == "POST":
        try:
            new_username = request.POST["username"]
            if new_username != user.username:
                try:
                    User.objects.get(username=new_username)
                    messages.error(request,"Username already taken")

                except User.DoesNotExist:
                    user.username = new_username
                    user.save()
                    messages.error(request,"Username changed,login again to confirm")
                    logout(request)
                    return HttpResponseRedirect(reverse("account_login"))


        except Exception:
            try:
                new_first_name = request.POST["first_name"]
                new_last_name = request.POST["last_name"]
                if new_first_name != user.first_name:
                    user.first_name = new_first_name
                    user.save()

                if new_last_name != user.last_name:
                    user.last_name = new_last_name
                    user.save()

            except Exception:
                return ""

        return HttpResponseRedirect(reverse("settings"))


@login_required(login_url="account_login")
@verified_email_required
def live_scores(request,league):
    user = request.user
    if user.is_authenticated and user.type == "premium" and user.premium.activated:
        # http = urllib3.PoolManager()
        # response = http.request("GET",settings.LIVE_SCORE)
        # response = response.data
        # response = urlopen(settings.LIVE_SCORE).read()
        # true = "true"
        # null = "null"
        # live_scores = response.decode()
        # live_scores = eval(live_scores)
        # live_scores = live_scores["data"]["match"]
        type = "all"
        live_scores = []
        if league == "all":
            response = urlopen(settings.LIVE_SCORE).read()

        elif league != "":
            id = ""
            for name in leagues_live_scores:
                if league.lower() == name["name"].lower():
                    id = name["id"]
                    type = name["display"]

            if id != "":
                response = urlopen(f"{settings.LIVE_SCORE}&competition_id={id}").read()

            else:
                return HttpResponseRedirect(reverse("live_scores",args=("all",)))
                

        true = "true"
        null = "null"
        live_scores = response.decode()
        live_scores = eval(live_scores)
        live_scores = live_scores["data"]["match"]
        return render(request,"predictions/live-scores.html",{
            "live_scores": live_scores,
            "leagues_list": leagues_live_scores,
            "type":type,
        })

    else:
        return HttpResponseRedirect(reverse("index"))



class support(UserPassesTestMixin,View):
    login_url = "account_login"

    def test_func(self):
        user = self.request.user
        return user.is_authenticated and user.type != "" and user.type is not None

    def get(self,request):
        return render(request,"predictions/support.html")

    def post(self,request):
        user = self.request.user
        email = user.email

        try:
            issue = request.POST["issue"]

        except MultiValueDictKeyError:
            messages.error(request,"Pls choose an issue")
            return HttpResponseRedirect(reverse("support"))
            
        subject = request.POST["subject"]
        body = request.POST["body"]

        #send mail to user
        user_header = "Thanks for contacting us"
        user_html_message = render_to_string("predictions/support_thanks.html",{"issue":issue,"user":user})
        user_plain_message = strip_tags(user_html_message)

        send_mail(message=user_plain_message, from_email=settings.EMAIL_HOST_USER,subject=user_header,recipient_list=[email],fail_silently=False,html_message=user_html_message)
        #send mail to the admin

        admin_html_message = render_to_string("predictions/admin_support.html",{"body":body,"issue":issue,"user":user})
        admin_plain_message = strip_tags(admin_html_message)
        send_mail(message=admin_plain_message, from_email=settings.EMAIL_HOST_USER,subject=f"New complaint: {subject}",recipient_list=[settings.EMAIL_HOST_USER],fail_silently=False,html_message=admin_html_message)

        messages.success(request,"Email sent successfully,thanks for contacting us")
        return HttpResponseRedirect(reverse("support"))

@login_required(login_url="account_login")
@verified_email_required
def delete_account(request):
    user = request.user
    try:
        user.delete()
    except Exception:
        messages.error(request,"Something wrong happened")
        return HttpResponseRedirect(reverse("settings"))

    return HttpResponseRedirect(reverse("index"))


    