from rest_framework import serializers
from consolelog_app.models import Timestamp

class TimestampSerializer(serializers.ModelSerializer):

    class Meta:
        fields = "__all__"
        model = Timestamp
