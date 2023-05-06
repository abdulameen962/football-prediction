from django.contrib.sites.shortcuts import get_current_site
from .models import League


def current_site_processor(request):
    current_site = get_current_site(request)
    context = {"current_site":current_site,
    "site_name":"Predictions",
    "leagues" : League.objects.all(),
    
    }
    return context