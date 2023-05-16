from celery import shared_task
from django.utils import timezone
from .models import Notification,Prediction,Completed_Predictions
import datetime
from celery.schedules import crontab
from datetime import timedelta,datetime
from django.core.mail import send_mail
from django.conf import settings

run_every_hour = crontab(hour='23')

@shared_task
def prediction_task_handler():
    predictions = Prediction.objects.all()

    if len(predictions) > 0:
        for predict in predictions:
            created = predict.updated
            created = created.strftime("%m/%d/%Y %I:%M %p")
            created = datetime.strptime(created,"%m/%d/%Y %I:%M %p")
            today = timezone.now()
            today = today.strftime("%m/%d/%Y %I:%M %p")
            today = datetime.strptime(today,"%m/%d/%Y %I:%M %p")
            difference = today - created
            difference = difference.total_seconds()

            #convert to 30 days
            difference = difference / 86400

            if difference >= 3:
                #move it to completed prediction and delete prediction
                completed = Completed_Predictions(league=predict.league,type=predict.type,published=predict.published,updated=predict.updated,
                home = predict.home,away=predict.away,correct_score=predict.correct_score,halftime_correct_score=predict.halftime_correct_score,combo_draws=predict.combo_draws,combo_tickets=predict.combo_tickets,tip=predict.tip
                )
                completed.save()
                subject = f"A new prediction from {completed.league.league} has been moved to completed"
                predict.delete()

                send_mail(message="A new message has been marked completed,pls come to the dashboard to specify the prediction status", from_email=settings.EMAIL_HOST_USER,subject=subject,recipient_list=[settings.EMAIL_FROM_USER],fail_silently=False)


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
            today = timezone.now()
            today = today.strftime("%m/%d/%Y %I:%M %p")
            today = datetime.strptime(today,"%m/%d/%Y %I:%M %p")
            difference = today - created
            difference = difference.total_seconds()

            #convert to 30 days
            difference = difference / 86400

            if difference >= 2:
                #notification has existed for 2 days
                notify.delete()

    return "It has been successfully done"



# result = updateNotification.delay(priority=10)
result = updateNotification.apply_async(task_id='update_notification', interval=run_every_hour,priority=12)


@shared_task
def completed_prediction_task_handler():
    completed_predictions = Completed_Predictions.objects.all()

    if len(completed_predictions) > 0:
        for complete in completed_predictions:
            created = complete.updated
            created = created.strftime("%m/%d/%Y %I:%M %p")
            created = datetime.strptime(created,"%m/%d/%Y %I:%M %p")
            today = timezone.now()
            today = today.strftime("%m/%d/%Y %I:%M %p")
            today = datetime.strptime(today,"%m/%d/%Y %I:%M %p")
            difference = today - created
            difference = difference.total_seconds()

            #convert to 30 days
            difference = difference / 86400

            if difference >= 30:
                #delete completed prediction
                complete.delete()

    return "Completed Prediction successfully updated"


result2 = completed_prediction_task_handler.apply_async(task_id="completed_prediction_task_handler",interval=run_every_hour,priority=11)