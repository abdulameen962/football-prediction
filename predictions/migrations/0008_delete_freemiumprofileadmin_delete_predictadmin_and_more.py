# Generated by Django 4.2 on 2023-05-14 19:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('predictions', '0007_alter_league_code_alter_league_league'),
    ]

    operations = [
        migrations.DeleteModel(
            name='FreemiumProfileAdmin',
        ),
        migrations.DeleteModel(
            name='PredictAdmin',
        ),
        migrations.DeleteModel(
            name='PremiumProfileAdmin',
        ),
    ]
