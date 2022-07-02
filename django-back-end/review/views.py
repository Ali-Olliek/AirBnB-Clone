from django.http import HttpResponse, JsonResponse
from .models import Review

def favorites (request):
    if request.method == 'POST':
        house_id =  (request.POST['housingId'])
        user_id =  (request.POST['guestId'])

        favorite = Review(housing_id = house_id, guest_id = user_id)   
        favorite.save()

        return JsonResponse ({
            "status": "success",
            "like": favorite.id
            })