from django.shortcuts import render
from django.views.generic import TemplateView

from rest_framework import generics
from consolelog_app.models import Timestamp, Games, User
from consolelog_app.serializers import TimestampSerializer, GamesSerializer, UsersSerializer


############### API_KEY ##########################
from django.conf import settings

# IndexView
class IndexView(TemplateView):
    template_name = "index.html"

# Timestamp Creation
class TimestampListCreateAPIView(generics.ListCreateAPIView):
    queryset = Timestamp.objects.all()
    serializer_class = TimestampSerializer

# Games List Display
class GamesListCreateAPIView(generics.ListCreateAPIView):
    queryset = Games.objects.all()
    serializer_class = GamesSerializer

# Users List Display
class UsersListCreateAPIView(generics.ListCreateAPIView):
    queryset = User.objects.select_related('userprofile').all()
    serializer_class = UsersSerializer
