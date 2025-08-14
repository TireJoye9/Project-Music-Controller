from django.urls import path
from .views import index

urlpatterns = [
   path('' , index),
   path('join',index),
   path('create', index),
   #dynamic Url used to capture code of room
   path('room/<str:roomCode>', index),
]
