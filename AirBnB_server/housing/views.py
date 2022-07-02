from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .models import Housing

def stays (request):
    housings_list = Housing.objects.all()
    return HttpResponse(housings_list)
