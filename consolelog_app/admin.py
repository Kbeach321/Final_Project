from django.contrib import admin
from consolelog_app.models import User, UserProfile

myModels = [User, UserProfile]

admin.site.register(myModels)
