# Generated by Django 4.2 on 2023-05-06 09:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('predictions', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='prediction',
            name='combo_draws',
            field=models.CharField(default=None, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='prediction',
            name='combo_tickets',
            field=models.CharField(default=None, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='prediction',
            name='halftime_correct_score',
            field=models.CharField(default=None, max_length=50, null=True),
        ),
    ]
