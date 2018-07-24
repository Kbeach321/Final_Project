from django.db import models
from django.contrib.auth.models import AbstractUser, User
from django.db.models.signals import post_save
from django.conf import settings


# User Creation
class User(AbstractUser):
    pass

#  Timestamp
class Timestamp(models.Model):
    created = models.DateTimeField(auto_now_add=True)

#  UserProfile Displays Users informatin (UNIQUE TO LOGGED IN USER)
class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,)
    bio = models.CharField(max_length=250, blank=True, null=True)
    age = models.IntegerField(blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, null=True)
    profile_picture = models.FileField(upload_to = 'profile_image', blank=True, null=True)

# Games --> Multipule Users for each game
class Games(models.Model):
    users = models.ManyToManyField(User)
    name = models.CharField(max_length=100, default='')
    cover = models.FileField(upload_to = 'covers')
    platform = models.CharField(max_length=20, default = '')
