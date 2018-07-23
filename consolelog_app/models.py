from django.db import models
from django.contrib.auth.models import AbstractUser, User
from django.db.models.signals import post_save
from django.conf import settings

# Create your models here.

class User(AbstractUser):
    pass


class Timestamp(models.Model):
    created = models.DateTimeField(auto_now_add=True)

class UserProfile(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.CASCADE,)
    # first_name = models.CharField(max_length='20', default='')
    # last_name = models.CharField(max_length='20', default='')
    bio = models.CharField(max_length=250, default='')
    age = models.IntegerField()
    location = models.CharField(max_length=100, default='')

class Games(models.Model):
    users = models.ManyToManyField(User)
    name = models.CharField(max_length=100, default='')
    cover = models.FileField(upload_to = 'covers')
    platform = models.CharField(max_length=20, default = '')
