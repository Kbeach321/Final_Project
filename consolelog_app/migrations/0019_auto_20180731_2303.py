# Generated by Django 2.0.7 on 2018-07-31 23:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('consolelog_app', '0018_auto_20180731_2254'),
    ]

    operations = [
        migrations.RenameField(
            model_name='game',
            old_name='platform',
            new_name='platforms',
        ),
        migrations.RemoveField(
            model_name='game',
            name='slug',
        ),
        migrations.AlterField(
            model_name='game',
            name='cover',
            field=models.CharField(max_length=500),
        ),
    ]
