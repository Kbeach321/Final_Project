from django.shortcuts import render
from django.views.generic import TemplateView

from rest_framework import generics
from consolelog_app.models import Games, User
from consolelog_app.serializers import GamesSerializer, UsersSerializer


############### API_KEY ##########################
from django.conf import settings

# IndexView
class IndexView(TemplateView):
    template_name = "index.html"

# Games List Display
class GamesListCreateAPIView(generics.ListCreateAPIView):
    queryset = Games.objects.all()
    serializer_class = GamesSerializer

# Users List Display
class UsersListCreateAPIView(generics.ListCreateAPIView):
    queryset = User.objects.select_related('profile').all()
    serializer_class = UsersSerializer
