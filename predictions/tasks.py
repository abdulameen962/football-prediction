from celery import shared_task
from django.utils import timezone
from .models import Notification,Prediction
import datetime
from celery.schedules import crontab
from datetime import timedelta,datetime

today = timezone.now()
run_every_hour = crontab(hour='23')

@shared_task
def prediction_task_handler():
    predictions = Prediction.objects.all()

    if len(predictions) > 0:
        for predict in predictions:
            created = predict.updated
            created = created.strftime("%m/%d/%Y %I:%M %p")
            created = datetime.strptime(created,"%m/%d/%Y %I:%M %p")
            today = today.strftime("%m/%d/%Y %I:%M %p")
            today = datetime.strptime(today,"%m/%d/%Y %I:%M %p")
            difference = today - created
            difference = difference.total_seconds()

            #convert to 30 days
            difference = difference / 86400

            if difference >= 3:
                #notification has existed for 3 days
                predict.delete()

    return "Prediction has been successfully updated"

# result = updateNotification.delay(priority=10)
result1 = prediction_task_handler.apply_async(task_id='prediction_task_handler', interval=run_every_hour,priority=10)

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

    return "It has been successfully done"



# result = updateNotification.delay(priority=10)
result = updateNotification.apply_async(task_id='update_notification', interval=run_every_hour,priority=12)
