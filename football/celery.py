from __future__ import absolute_import, unicode_literals
import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'football.settings')

celey = Celery('football')

celey.config_from_object('django.conf:settings', namespace='CELERY')
celey.autodiscover_tasks()

from celery import shared_task

# @shared_task
# def add(x, y):
#     return x + y

# @shared_task
# def multiply(x, y):
#     return x * y

# @shared_task
# def add_and_multiply(x, y):
#     addition = add.s(x, y)
#     product = multiply.s(x, y)
#     return addition | product

# result = add.apply_async(args=(4, 5), priority=10)

#scheduling tasks
# from datetime import timedelta

# result = add.apply_async(args=(4, 5), countdown=60)
# from datetime import datetime

# result = add.apply_async(args=(4, 5), eta=datetime(2022, 1, 1, 0, 0, 0))

# for getting states
# result = AsyncResult(task_id)
# print(result.state)