# Generated by Django 4.2 on 2023-05-29 07:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('predictions', '0017_paymentlinks'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sociallinks',
            name='first_payment_link',
        ),
        migrations.RemoveField(
            model_name='sociallinks',
            name='second_payment_link',
        ),
    ]
