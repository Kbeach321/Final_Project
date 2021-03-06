# Generated by Django 2.0.7 on 2018-07-31 22:07

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('consolelog_app', '0016_auto_20180731_2153'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='idgb_id',
            field=models.CharField(default='', max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='game',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='game',
            name='platform',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='game',
            name='slug',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='game',
            name='users',
            field=models.ManyToManyField(related_name='collection', to=settings.AUTH_USER_MODEL),
        ),
    ]
