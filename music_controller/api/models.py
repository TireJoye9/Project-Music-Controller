from django.db import models
import string, random

# Create your models here.

#function to generate out random code
def generate_unique_code():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase), k = length)
        if Room.objects.filter(code=code).count() == 0: #checks objects in room class (codes) to see if trully unique
            break

    return code
        
#django allows us to write python code to create a data base
#gonna use it to group users together in a room
#user hosts room others join

class Room(models.Model): #inherits from model
    code = models.CharField(max_length=8, default=", unique= True")
    host = models.CharField(max_length=50, unique= True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)


#want to return json for front end to see this information
