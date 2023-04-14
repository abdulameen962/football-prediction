from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import UserManager
from django.urls import reverse

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

class User(AbstractUser):
    TYPE_CHOICES = (
        ("freemium","FREEMIUM"),
        ("premium","PREMIUM"),
    )
    type = models.CharField(choices=TYPE_CHOICES,max_length=20)
    objects = UserManager()
    freemium_user = FreemiumManager()
    premium_user = PremiumManager()


class Blog(models.Model):
    STATE_CHOICES = (
        ("published","PUBLISHED"),
        ("draft","DRAFT"),
    )

    title = models.CharField(max_length=200)
    slug = models.SlugField(blank=True,null=True,max_length=200)
    body = models.TextField()
    published = models.DateTimeField(auto_now_add=False)
    state = models.CharField(choices=STATE_CHOICES, max_length=50)
    created = models.DateTimeField(auto_now_add=False)
    author = models.ForeignKey(User,on_delete=models.PROTECT)
    objects = models.Manager()
    new_manager = PublishedManager()
    
    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("blog_detail", args={self.slug})
    

    class Meta:
        ordering = ("-created",)


class FreemiumProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.PROTECT)


class PremiumProfile(models.Model):
    user = models.OneToOneField(User,on_delete=models.PROTECT)
    activated = models.BooleanField(default=False)

    
