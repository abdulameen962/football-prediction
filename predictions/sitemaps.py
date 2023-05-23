from django.contrib.sitemaps import Sitemap
from django.urls import reverse
from .views import leagues_live_scores
from .models import Blog,League,Prediction,FreemiumProfile,PremiumProfile,Notification,Completed_Predictions

class StaticPagesSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.6

    def items(self):
        return ["index", ]

    def location(self,item):
        return reverse(item)


class ChooseTypeSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.6

    def items(self):
        return ["type",]

    def location(self, item):
        return reverse(item)


class BlogsMainSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.6

    def items(self):
        return ["blogs",]

    def location(self, item):
        return reverse(item)


class BlogsSitemap(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return Blog.objects.all()

    def lastmod(self,obj):
        return obj.created

    def location(self, obj):
        return reverse("blog_detail",args=[obj.slug])

class Feeds(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return ["post_feeds",]

    def location(self,item):
        return reverse(item)


class Freemium(Sitemap):
    changefreq = "monthly"
    priority = 0.5

    def items(self):
        return ["freemium",]

    def location(self, item):
        return reverse(item)


class Premium(Sitemap):
    changefreq = "monthly"
    priority = 0.5

    def items(self):
        return ["premium",]

    def location(self,item):
        return reverse(item)


class NotVerified(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return ["not_verified",]

    def location(self, item):
        return reverse(item)


class CompleteSignupFreemium(Sitemap):
    changefreq = "never"
    priortiy = 0.5

    def items(self):
        return ["complete_signup",]

    def location(self,item):
        return reverse(item,args=["freemium",])


class CompleteSignupPremium(Sitemap):
    changefreq = "never"
    priortiy = 0.5

    def items(self):
        return ["complete_signup",]

    def location(self,item):
        return reverse(item,args=["premium",])


class PremiumPayment(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return ["premium_payment",]

    def location(self,item):
        return reverse(item)


class ConfirmPayment(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return ["confirm_payment",]

    def location(self,item):
        return reverse(item)


class CancelSubscription(Sitemap):
    changefreq = "never"
    priority = 0.5


    def items(self):
        return ["cancel_subscription",]


    def location(self,item):
        return reverse(item)


class ActivateSubscription(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return ["activate_subscription",]


    def location(self,item):
        return reverse(item)


class Notifications(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return ["notifications",]


    def location(self,item):
        return reverse(item)


class OngoingPredictions(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return ["all_leagues",]

    def location(self,item):
        return reverse(item,args=["current",])


class CompletedPredictions(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return ["all_leagues",]

    def location(self,item):
        return reverse(item,args=["completed",])


class OngoingLeagueSingle(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return League.objects.all()

    def location(self, obj):
        return reverse("leagues",args=[obj.id,"current",])


class CompletedLeagueSingle(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return League.objects.all()

    def location(self, obj):
        return reverse("leagues",args=[obj.id,"completed",])


class LiveScoresSitemap(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return leagues_live_scores

    def location(self,obj):
        return reverse("live_scores",args=[obj["name"].lower()])


class OngoingWatchlist(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return ["watchlist",]

    def location(self,item):
        return reverse(item,args=["current",])


class CompletedWatchlist(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return ["watchlist",]

    def location(self,item):
        return reverse(item,args=["completed",])


class SupportSitemap(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return ["support",]

    def location(self,item):
        return reverse(item)


class SettingsSitemap(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return ["settings",]

    def location(self,item):
        return reverse(item)


class DeleteAccoutnSitemap(Sitemap):
    changefreq = "never"
    priority = 0.5

    def items(self):
        return ["delete_account",]

    def location(self,item):
        return reverse(item)