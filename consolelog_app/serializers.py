from rest_framework import serializers
from consolelog_app.models import Timestamp, Games, User

# TimeStampSerializer
class TimestampSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        model = Timestamp

# GamesSerializer
class GamesSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        model = Games

# UsersSerializer --> redirect to UserProfiles??? Return Image???
class UsersSerializer(serializers.ModelSerializer):

    class Meta:
        # Test #
        # fields = "__all__"
        fields = ["userprofile_set"]
        model = User
