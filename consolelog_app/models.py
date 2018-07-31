from django.db import models
from django.contrib.auth.models import AbstractUser, User
from django.db.models.signals import post_save
from django.conf import settings


# User Creation
class User(AbstractUser):
    pass

#  UserProfile Displays Users informatin (UNIQUE TO LOGGED IN USER)
class UserProfile(models.Model):
    user = models.OneToOneField(User,related_name='profile', on_delete=models.CASCADE,)
    descripton = models.CharField(max_length=250, default='')
    profile_picture = models.FileField(upload_to = 'profile_image', default='./../static/src/components/Images/default-profile.jpg')

# Games --> Multipule Users for each game
class Games(models.Model):
    users = models.ManyToManyField(User)
    name = models.CharField(max_length=100, default='')
    cover = models.FileField(upload_to = 'covers')
    platform = models.CharField(max_length=20, default = '')
