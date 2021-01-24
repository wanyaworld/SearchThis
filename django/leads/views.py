from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Lead
from .serializers import LeadSerializer
from rest_framework import generics

# Create your views here.
class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

def queryResultView(request, query):
    data = {
        'query': query,
        'result': 'service not impled yet',
    }
    return JsonResponse(data);
