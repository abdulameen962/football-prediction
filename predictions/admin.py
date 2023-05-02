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

class PredictAdmin(models.Model):
    list_display = ("league","type","home","away","correct_score")

class FreemiumProfileAdmin(models.Model):
    list_display = ("user")
    filter_horizontal = ("watchlist",)

class PremiumProfileAdmin(models.Model):
    list_display = ("user","activated")
    filter_horizontal = ("watchlist",)

admin.site.register(User,UserAdmin)
admin.site.register(Blog,BlogAdmin)
admin.site.register(FreemiumProfile)
admin.site.register(PremiumProfile)
admin.site.register(League)
admin.site.register(Prediction)
admin.site.register(Tag)
admin.site.register(Notification)



