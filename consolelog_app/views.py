from django.shortcuts import render
from django.views.generic import TemplateView
import requests
from rest_framework import generics, status
from rest_framework.views import APIView
from consolelog_app.models import Game, User, UserProfile
from consolelog_app.serializers import GameSerializer, UsersSerializer, LoginSerializer, UserProfileSerializer
from rest_framework.response import Response
from django.conf import settings
from django.utils.text import slugify
from consolelog_app.permissions import IsOwnerOrReadOnly
from django.db.models import Q
from django.core.mail import send_mail


###################### IGDB API ######################################
from igdb_api_python.igdb import igdb as igdb
#ENTER YOUR KEY HERE
igdb = igdb("857a9df19e79338f5a1f9d88bb6a5a4b")

# IndexView
class IndexView(TemplateView):
    template_name = "index.html"

#User Profile Page -- CURRENT USERS PROFILE
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

#  Shows a user by ID
class UsersRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UsersSerializer
    def get_queryset(self):
        return User.objects.all()



# Add games to profile
class GameRetrieveUpdateDestroyAPIView(generics.ListAPIView, generics.DestroyAPIView, generics.CreateAPIView):
    serializer_class = GameSerializer
    # Creates the game to add to the users page
    def create(self,request,*args,**kwargs):
        id = request.data['igdb_id']
        games = Game.objects.filter(igdb_id=id)
        if games.exists():
            games[0].users.add(request.user)
            serializer = self.get_serializer(data=games[0])
            serializer.is_valid(raise_exception=True)
            headers = self.get_success_headers(serializer.data)
            response = Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            request.data["users"] = [request.user.pk]
            response = super().create(request, *args, **kwargs)
        return response

    # Gets the games for a users collection (foriegn key'd to user)
    def get_queryset(self):
        return self.request.user.collection.all()

    def delete(self,request,*args,**kwargs):
        id = self.kwargs.get("igdb_id")
        game = Game.objects.get(igdb_id=id)
        request.user.collection.remove(game)
        return Response(status=status.HTTP_204_NO_CONTENT)


# list of Games for each user
class GamesListAPIView(generics.ListAPIView):
    serializer_class = GameSerializer

    def get_queryset(self):
        return Game.objects.filter(users=self.kwargs.get("user_id"))



# Uses IGDB Python Wrapper and communicates to pull from 3rd party API #
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


class SendEmailAPIView(APIView):
    def post(self,request,*args,**kwargs):
        user_id = self.kwargs.get('user_id')
        to_user=User.objects.get(id=user_id)
        from_user= request.user
        send_mail(
            '{0} has sent you a message'.format(request.user.username),
            request.data.get("message"),
            from_user.email,
            [to_user.email],
            fail_silently=False,
        )
        return Response(status=status.HTTP_201_CREATED)
