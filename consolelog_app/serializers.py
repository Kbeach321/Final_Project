from rest_framework import serializers
from consolelog_app.models import Games, User, UserProfile

#RegisterSerializer --> Registers a User
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = User

# LoginSerializer --> Saves the Username and Password to return Auth
class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ["username", "password"]
        model = User

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
