# Generated by Django 4.2 on 2023-05-06 09:25

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('predictions', '0002_prediction_combo_draws_prediction_combo_tickets_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prediction',
            name='published',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
