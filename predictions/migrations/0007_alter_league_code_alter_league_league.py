# Generated by Django 4.2 on 2023-05-14 15:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('predictions', '0006_alter_blog_author_alter_freemiumprofile_user_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='league',
            name='code',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='league',
            name='league',
            field=models.CharField(max_length=100),
        ),
    ]
