from django.shortcuts import render
from django.views.generic import TemplateView

from rest_framework import generics
from consolelog_app.models import Timestamp, Games
from consolelog_app.serializers import TimestampSerializer, GamesSerializer


############### API_KEY ##########################
from django.conf import settings


class IndexView(TemplateView):
    template_name = "index.html"

class TimestampListCreateAPIView(generics.ListCreateAPIView):
    queryset = Timestamp.objects.all()
    serializer_class = TimestampSerializer

class GamesListCreateAPIView(generics.ListCreateAPIView):
    queryset = Games.objects.all()
    serializer_class = GamesSerializer
