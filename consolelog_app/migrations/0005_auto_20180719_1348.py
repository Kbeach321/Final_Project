# Generated by Django 2.0.7 on 2018-07-19 13:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('consolelog_app', '0004_auto_20180719_1346'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userprofile',
            old_name='owner',
            new_name='user',
        ),
    ]