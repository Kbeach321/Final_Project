from rest_framework import serializers
from consolelog_app.models import Timestamp
from consolelog_app.models import Games

class TimestampSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        model = Timestamp

class GamesSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        model = Games
