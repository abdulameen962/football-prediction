from django.urls import path

from . import views
from .feeds import LatestPostFeed
from allauth.account.views import *
from django.contrib.sitemaps.views import sitemap
from .sitemaps import *

sitemaps = {
    "static": StaticPagesSitemap,
    "choose-type":ChooseTypeSitemap,
    "freemium":Freemium,
    "premium":Premium,
    "not-verified":NotVerified,
    "complete-signup-freemium":CompleteSignupFreemium,
    "complete-signup-premium":CompleteSignupPremium,
    "premium-payment":PremiumPayment,
    "confirm-payment":ConfirmPayment,
    "cancel-subscription":CancelSubscription,
    "activate-subscription":ActivateSubscription,
    "notifications":Notifications,
    "ongoing-predictions":OngoingPredictions,
    "completed-predictions":CompletedPredictions,
    "ongoing-single-leagues":OngoingLeagueSingle,
    "completed-league-single":CompletedLeagueSingle,
    "ongoing-watchlist":OngoingWatchlist,
    "completed-watchlist":CompletedWatchlist,
    "support":SupportSitemap,
    "settings":SettingsSitemap,
    "delete-account":DeleteAccoutnSitemap,
    "live-scores":LiveScoresSitemap,
    "blogs": BlogsMainSitemap,
    "blogs_detail": BlogsSitemap,
    "feeds":Feeds,
}


urlpatterns = [
    path("sitemap.xml/",sitemap,{"sitemaps":sitemaps},name="django.contrib.sitemaps.views.sitemap",),
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
    path("leagues/<str:state>/",views.leagues.as_view(),name="all_leagues"),
    path("leagues/<int:id>/<str:state>/",views.league_single,name="leagues"),
    path("live-scores/<str:league>/",views.live_scores,name="live_scores"),
    path("watchlists/<str:state>/",views.watchlist.as_view(),name="watchlist"),
    path("support/",views.support.as_view(),name="support"),
    path("settings/",views.profile,name="settings"),
    path("delete-account/",views.delete_account,name="delete_account"),



    #api views
    path("get-notifications/",views.get_notification,name="get_notification"),
    path("update-notifications/",views.update_notification,name="update_notification"),
    path("edit-notifications/<int:id>",views.edit_notification.as_view(),name="edit_notification"),
    path("search/",views.Search.as_view(),name="search"),
    # path("get-leagues/",views.get_leagues.as_view(),name="get_leagues"),
    path("get-type-league-info/<str:method>/<int:league_id>/",views.get_league_info,name="get_league_info"),
    path("add-watchlist/<int:id>/",views.add_watchlist,name="add_Watchlist"),
]
