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
    bio = models.CharField(max_length=250, default='')
    age = models.IntegerField()
    location = models.CharField(max_length=100, default='')









# def create_profile(sender, **kwargs):
#     if kwargs['created']:
#         user_profile = UserProfile.objects.create(user=kwargs['instance'])

# post_save.connect(create_profile, sender=User)
