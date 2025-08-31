from django.urls import path
from .views import RoomView
from .views import CreateRoomView
from .views import GetRoom
from .views import JoinRoom
urlpatterns = [
    path('room', RoomView.as_view()),
    path('create', CreateRoomView.as_view()),
    path('get-room', GetRoom.as_view()),
    path('join', JoinRoom.as_view()),
]
