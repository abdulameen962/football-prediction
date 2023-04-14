from django.contrib.sites.shortcuts import get_current_site

def current_site_processor(request):
    current_site = get_current_site(request)
    return {"current_site":current_site}