from celery import shared_task
from django.utils import timezone
from .models import Notification
import datetime

today = timezone.now()

@shared_task
def updateNotification():
    notifications = Notification.objects.all()
    if len(notifications) > 0:
        for notify in notifications:
            created = notify.created
            created = created.strftime("%m/%d/%Y %I:%M %p")
            created = datetime.strptime(created,"%m/%d/%Y %I:%M %p")
            today = today.strftime("%m/%d/%Y %I:%M %p")
            today = datetime.strptime(today,"%m/%d/%Y %I:%M %p")
            difference = today - created
            difference = difference.total_seconds()

            #convert to 30 days
            difference = difference / 86400

            if difference >= 30:
                #notification has existed for 30 days
                notify.delete()


result = updateNotification.apply_async(args=(4, 5), priority=10)