from django.contrib import admin

from .models import *
# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display= ("username","type")

class BlogAdmin(admin.ModelAdmin):
    list_display = ("title","author","state","published")
    filter_horizontal = ("tags",)

class LeagueAdmin(admin.ModelAdmin):
    list_display = ("league","code")

class FreemiumProfileAdmin(admin.ModelAdmin):
    # list_display = ("user")
    filter_horizontal = ("watchlist",)

class PremiumProfileAdmin(admin.ModelAdmin):
    # list_display = ("user","activated")
    filter_horizontal = ("watchlist",)

class LeagueAdmin(admin.ModelAdmin):
    list_display = ("code","league")

class PredictionAdmin(admin.ModelAdmin):
    list_display = ("home","away","correct_score","halftime_correct_score","prediction_status")

class NotificationAdmin(admin.ModelAdmin):
    list_display = ("header","message","read","created")

class SocialLinksAdmin(admin.ModelAdmin):
    list_display = ("twitter_link","facebook_link","whatsapp_link","linkedin_link","first_payment_link","second_payment_link")

admin.site.register(User,UserAdmin)
admin.site.register(Blog,BlogAdmin)
admin.site.register(FreemiumProfile,FreemiumProfileAdmin)
admin.site.register(PremiumProfile,PremiumProfileAdmin)
admin.site.register(League,LeagueAdmin)
admin.site.register(Prediction,PredictionAdmin)
admin.site.register(Tag)
admin.site.register(Notification,NotificationAdmin)
admin.site.register(Completed_Predictions,PredictionAdmin)
admin.site.register(SocialLinks,SocialLinksAdmin)



