from django.db import models
from django.contrib.auth.models import AbstractUser, User
from django.db.models.signals import post_save
from django.conf import settings


# User Creation
class User(AbstractUser):
    description = models.CharField(max_length=250, default='')
    profile_picture = models.FileField(upload_to = 'profile_image', default='./../static/src/components/Images/default-profile.jpg')


#  UserProfile Displays Users informatin (UNIQUE TO LOGGED IN USER)
class UserProfile(models.Model):
    user = models.OneToOneField(User,related_name='profile', on_delete=models.CASCADE,)
    description = models.CharField(max_length=250, default='')
    profile_picture = models.FileField(upload_to = 'profile_image', default='./../static/src/components/Images/default-profile.jpg')

# Games --> Multipule Users for each game
class Game(models.Model):
    users = models.ManyToManyField(User, related_name='collection')
    name = models.CharField(max_length=100)
    cover = models.CharField(max_length=500)
    # platforms = models.CharField(max_length=20)
    igdb_id = models.CharField(max_length=50)
