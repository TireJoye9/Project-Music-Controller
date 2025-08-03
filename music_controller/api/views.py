from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializers
from .models import Room

# Create your views here.
#Api view to let us view list of all the different rooms

class RoomView(generics.CreateAPIView): #allows us to view all different rooms and create the rooms too
    queryset = Room.objects.all()
    serializer_class = RoomSerializers