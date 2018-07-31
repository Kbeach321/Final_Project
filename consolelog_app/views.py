from django.shortcuts import render
from django.views.generic import TemplateView
import requests
from rest_framework import generics
from rest_framework.views import APIView
from consolelog_app.models import Games, User, UserProfile
from consolelog_app.serializers import GamesSerializer, UsersSerializer, LoginSerializer, UserProfileSerializer
from rest_framework.response import Response
from django.conf import settings
from django.utils.text import slugify

###################### IGDB API ######################################
from igdb_api_python.igdb import igdb as igdb
#ENTER YOUR KEY HERE
igdb = igdb("857a9df19e79338f5a1f9d88bb6a5a4b")

# IndexView
class IndexView(TemplateView):
    template_name = "index.html"

#User Profile Page -- For a Specific Endpoint
class UserProfileAPIView(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UsersSerializer

    def get_object(self):
        logged_in_user = self.request.user
        user = User.objects.get(pk=logged_in_user.pk)
        return user

# Users List Display
class UsersListCreateAPIView(generics.ListCreateAPIView):
    queryset = User.objects.select_related('profile').all()
    serializer_class = UsersSerializer

# Games List Display
class GamesListCreateAPIView(generics.ListCreateAPIView):
    queryset = Games.objects.all()
    serializer_class = GamesSerializer


class GamesProxyView(APIView):
    def get(self,request):
        result = igdb.games({
        'filters' :{
            '[platforms][any]':request.GET.get('platform_id'),
            '[slug][prefix]':slugify(request.GET.get('search'))
        },
        'fields' : ['name', 'cover', 'platforms'],
        'limit' : 50
        })
        return Response(result.body)
