# Generated by Django 2.0.7 on 2018-07-18 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('consolelog_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Timestamp',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
