from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import UserManager
from django.urls import reverse
from cloudinary.models import CloudinaryField


# Create your models here.
class PublishedManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(state="published")


class FreemiumManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(type="freemium")

class PremiumManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(type="premium")


TYPE_CHOICES = (
    ("freemium","FREEMIUM"),
    ("premium","PREMIUM"),
)
class User(AbstractUser):
    type = models.CharField(choices=TYPE_CHOICES,max_length=20)
    objects = UserManager()
    freemium_user = FreemiumManager()
    premium_user = PremiumManager()


STATE_CHOICES = (
    ("published","PUBLISHED"),
    ("draft","DRAFT"),
)

class Tag(models.Model):
    tag = models.CharField(max_length=50)

    def __str__(self):
        return self.tag

class Blog(models.Model):

    title = models.CharField(max_length=200)
    slug = models.SlugField(blank=True,null=True,max_length=200)
    body = models.TextField()
    published = models.DateTimeField(default=timezone.now)
    state = models.CharField(choices=STATE_CHOICES, max_length=50)
    created = models.DateTimeField(auto_now_add=False)
    author = models.ForeignKey(User,on_delete=models.CASCADE)
    cover_image = CloudinaryField("image",default=None,null=True)
    additonal_image = CloudinaryField("image",default=None,null=True)
    tags = models.ManyToManyField(Tag,related_name="blog_tags",default=None)
    objects = models.Manager()
    new_manager = PublishedManager()
    
    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("blog_detail", args={self.slug})
    

    class Meta:
        ordering = ("-created",)

class League(models.Model):
    code = models.CharField(max_length=50)
    league = models.CharField(max_length=100)
    logo = CloudinaryField("image",blank=True)
    objects = models.Manager()

    def __str__(self):
        return f"{self.league}({self.code})"


    class Meta:
        ordering = ("league",)

    def get_absolute_url(self):
        return reverse("leagues", args={self.id,"current"})   

    def serialize(self):
        return {
            "id": self.id,
            "code": self.code,
            "logo":self.logo.url,
            "league": self.league,
            # "predictions": [prediction.serialize() for prediction in self.prediction.all()]
        } 

class Prediction(models.Model):
    TIP_CHOICES = (
        ("home","HOME"),
        ("away","AWAY"),
        ("draw","DRAW"),
    )

    STATUS_CHOICES = (
        ("Ongoing","Ongoing"),
    )

    league = models.ForeignKey(League, on_delete=models.PROTECT,related_name="prediction")
    type = models.CharField(choices=TYPE_CHOICES, max_length=50,default="freemium")
    published = models.DateTimeField(auto_now_add=False,default=timezone.now)
    updated = models.DateTimeField(default=timezone.now)
    home = models.CharField(max_length=50)
    away = models.CharField(max_length=50)
    correct_score = models.CharField(max_length=50,default=None,null=True,blank=True)
    halftime_correct_score = models.CharField(max_length=50,default=None,null=True,blank=True)
    combo_draws = models.CharField(max_length=50,default=None,null=True,blank=True)
    combo_tickets = models.CharField(max_length=50,default=None,null=True,blank=True)
    prediction_status = models.CharField(choices=STATUS_CHOICES,default="Ongoing",max_length=50)
    send_mail = models.BooleanField(default=True)
    tip = models.CharField(choices=TIP_CHOICES,max_length=50)
    objects = models.Manager()

    def __str__(self):
        return f"{self.league.league}"


    class Meta:
        ordering = ("-updated",)
        verbose_name = "Prediction"
        verbose_name_plural = "Predictions"

    def get_absolute_url(self):
        return reverse("leagues", args={self.league.id,"current"})


    def serialize(self):
        return{
            "id": self.id,
            "league": self.league.serialize(),
            "updated": self.updated.strftime("%m/%d/%Y %I:%M %p"),
            "type": self.type,
            "home": self.home,
            "away": self.away,
            "tip":self.tip,
            "prediction_status":self.prediction_status,
            "correct_score":self.correct_score,
            "halftime_correct_score": self.halftime_correct_score,
            "combo_draws": self.combo_draws,
            "combo_tickets": self.combo_tickets,
        }    


class FreemiumProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,related_name="freemium")
    watchlist = models.ManyToManyField(League,related_name="freemium_leagues",blank=True,default=None)

    def __str__(self):
        return f"{self.user.username}"

class PremiumProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,related_name="premium")
    activated = models.BooleanField(default=False)
    watchlist = models.ManyToManyField(League,related_name="premium_leagues",blank=True,default=None)

    def __str__(self):
        return f"{self.user.username} has an activated state of {self.activated}"


class Notification(models.Model):
    users = models.ManyToManyField(User, related_name="notifications",default=None)
    created = models.DateTimeField(auto_now_add=False,default=timezone.now)
    header = models.CharField(max_length=200,default=None,null=True)
    message = models.TextField()
    read = models.BooleanField(default=False)
    objects = models.Manager()

    def __str__(self):
        return f"{self.message}"

    class Meta:
        ordering = ("-created",)
        verbose_name = "Notification"
        verbose_name_plural = "Notifications"


    def serialize(self):
        return {
            "id": self.id,
            "header":self.header,
            "created": self.created.strftime("%m/%d/%Y, %I:%M %p"),
            "message": self.message,
            "read": self.read,
        }
    

    
class Completed_Predictions(models.Model):
    TIP_CHOICES = (
        ("home","HOME"),
        ("away","AWAY"),
        ("draw","DRAW"),
    )

    STATUS_CHOICES = (
        ("completed","completed"),
        ("win","win"),
        ("lose","lose"),
    )

    league = models.ForeignKey(League, on_delete=models.PROTECT,related_name="completed_predictions")
    type = models.CharField(choices=TYPE_CHOICES, max_length=50,default="freemium")
    published = models.DateTimeField(auto_now_add=False,default=timezone.now)
    updated = models.DateTimeField(default=timezone.now)
    home = models.CharField(max_length=50)
    away = models.CharField(max_length=50)
    correct_score = models.CharField(max_length=50,default=None,null=True,blank=True)
    halftime_correct_score = models.CharField(max_length=50,default=None,null=True,blank=True)
    combo_draws = models.CharField(max_length=50,default=None,null=True,blank=True)
    combo_tickets = models.CharField(max_length=50,default=None,null=True,blank=True)
    prediction_status = models.CharField(choices=STATUS_CHOICES,default="completed",max_length=50)
    tip = models.CharField(choices=TIP_CHOICES,max_length=50)
    objects = models.Manager()

    def __str__(self):
        return f"{self.league.league}"


    class Meta:
        ordering = ("-updated",)
        verbose_name = "Completed Prediction"
        verbose_name_plural = "Completed Predictions"

    def get_absolute_url(self):
        return reverse("leagues", args={self.league.id,"completed"})


    def serialize(self):
        return{
            "id": self.id,
            "league": self.league.serialize(),
            "updated": self.updated.strftime("%m/%d/%Y %I:%M %p"),
            "type": self.type,
            "home": self.home,
            "away": self.away,
            "tip":self.tip,
            "prediction_status":self.prediction_status,
            "correct_score":self.correct_score,
            "halftime_correct_score": self.halftime_correct_score,
            "combo_draws": self.combo_draws,
            "combo_tickets": self.combo_tickets,
        }    


class SocialLinks(models.Model):
    twitter_link = models.CharField(max_length=200,blank=True)
    facebook_link = models.CharField(max_length=200,blank=True)
    whatsapp_link = models.CharField(max_length=200,blank=True)
    linkedin_link = models.CharField(max_length=200,blank=True)
    object = models.Manager()

    class Meta:
        verbose_name = "Social Link"
        verbose_name_plural = "Social Links"