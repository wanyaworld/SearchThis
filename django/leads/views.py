from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Lead
from .serializers import LeadSerializer
from rest_framework import generics
import requests

# Create your views here.
class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

def queryResultView(request, query):
    r = requests.get("http://ec2-3-141-32-127.us-east-2.compute.amazonaws.com/django/api/" + query);
    return JsonResponse(r.json());
