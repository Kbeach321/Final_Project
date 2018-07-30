from django.shortcuts import render
from django.views.generic import TemplateView
import requests
from rest_framework import generics
from rest_framework.views import APIView
from consolelog_app.models import Games, User
from consolelog_app.serializers import GamesSerializer, UsersSerializer, LoginSerializer
from rest_framework.response import Response
from django.conf import settings

###################### IGDB API ######################################
from igdb_api_python.igdb import igdb as igdb
#ENTER YOUR KEY HERE
igdb = igdb("857a9df19e79338f5a1f9d88bb6a5a4b")

# IndexView
class IndexView(TemplateView):
    template_name = "index.html"

class UserListCreateAPIView(generics.ListCreateAPIView):
    pass


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
        # {'game_id': '22'}
        # request.data['game_id']
        result = igdb.games({
        'filters' :{
            '[platforms][any]':'33,22,24,19,4,21,7,8,32,23,11,12'
        },
        'fields' : ['name', 'cover', 'platforms'],
        'limit' : 50
        })
        return Response(result.body)



################## TESTING ###############################
############## GamesProxy Test Code ##################
        # result = igdb.platforms({
        #     'ids':["33", "22"],
        #     'fields' : 'games',
        #     'expand' : 'name'
        # })

        # api_url = "https://api-endpoint.igdb.com/games/"
        # title = request.GET.get('title')
        # platform = request.GET.get('platforms')
        # cover = request.GET.get('cover')
        # games_data = requests.get(f'{api_url}/games/?fields=name,platforms,cover,{headers}')
        # games_data = requests.get(api_url, headers)
