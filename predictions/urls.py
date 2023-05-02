from django.urls import path

from . import views
from .feeds import LatestPostFeed
from allauth.account.views import *


urlpatterns = [
    path("",views.index,name="index"),
    path("choose-type/",views.Type,name="type"),
    path("blogs/",views.Blogview.as_view(),name="blogs"),
    path("feeds/",LatestPostFeed(),name="post_feeds"),
    path("freemium/",views.Freemiumview,name="freemium"),
    path("not-verified/",views.not_verified,name="not_verified"),
    path("premium/",views.Premiumview,name="premium"),
    path("blogs/<str:slug>/",views.BlogDetail.as_view(),name="blog_detail"),
    path("complete-signup/<str:method>/",views.complete_signup,name="complete_signup"),
    path("premium-payment/",views.premium_payment,name="premium_payment"),
    path("confirm-payment/",views.confirm_payment,name="confirm_payment"),
    path("cancel-subscription/",views.cancel_subscription,name="cancel_subscription"),
    path("activate-subscription/",views.activate_subscription,name="activate_subscription"),
    path("notifications/",views.NotificationsView.as_view(),name="notifications"),


    #api views
    path("get-notifications/",views.get_notification,name="get_notification"),
    path("update-notifications/",views.update_notification,name="update_notification"),
]
