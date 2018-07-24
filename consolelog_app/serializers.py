from rest_framework import serializers
from consolelog_app.models import Games, User, UserProfile

# GamesSerializer Shows all the Games
class GamesSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ["name", "cover", "platform", "users"]
        model = Games

# UsersSerializer --> #Returns profile_picture from Profile, to render to Users!
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ["profile_picture"]
class UsersSerializer(serializers.ModelSerializer):

    profile = UserProfileSerializer()
    class Meta:

        fields = ["username","profile"]
        model = User
