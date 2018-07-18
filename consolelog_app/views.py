from django.shortcuts import render
from django.views.generic import TemplateView

from rest_framework import generics
from consolelog_app.models import Timestamp
from consolelog_app.serializers import TimestampSerializer

# Create your views here.


class IndexView(TemplateView):
    template_name = "index.html"

class TimestampListCreateAPIView(generics.ListCreateAPIView):
    queryset = Timestamp.objects.all()
    serializer_class = TimestampSerializer
