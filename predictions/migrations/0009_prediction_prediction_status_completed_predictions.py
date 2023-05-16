# Generated by Django 4.2 on 2023-05-16 10:25

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('predictions', '0008_delete_freemiumprofileadmin_delete_predictadmin_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='prediction',
            name='prediction_status',
            field=models.CharField(choices=[('Ongoing', 'Ongoing')], default='Ongoing', max_length=50),
        ),
        migrations.CreateModel(
            name='Completed_Predictions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('freemium', 'FREEMIUM'), ('premium', 'PREMIUM')], default='freemium', max_length=50)),
                ('published', models.DateTimeField(default=django.utils.timezone.now)),
                ('updated', models.DateTimeField(default=django.utils.timezone.now)),
                ('home', models.CharField(max_length=50)),
                ('away', models.CharField(max_length=50)),
                ('correct_score', models.CharField(blank=True, default=None, max_length=50, null=True)),
                ('halftime_correct_score', models.CharField(blank=True, default=None, max_length=50, null=True)),
                ('combo_draws', models.CharField(blank=True, default=None, max_length=50, null=True)),
                ('combo_tickets', models.CharField(blank=True, default=None, max_length=50, null=True)),
                ('prediction_status', models.CharField(choices=[('Completed', 'Completed'), ('Won', 'Won'), ('Lost', 'Lost')], default='Completed', max_length=50)),
                ('send_mail', models.BooleanField(default=True)),
                ('tip', models.CharField(choices=[('home', 'HOME'), ('away', 'AWAY'), ('draw', 'DRAW')], max_length=50)),
                ('league', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='completed_predictions', to='predictions.league')),
            ],
            options={
                'verbose_name': 'Completed Prediction',
                'verbose_name_plural': 'Completed Predictions',
                'ordering': ('-updated',),
            },
        ),
    ]
