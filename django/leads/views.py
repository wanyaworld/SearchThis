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
        'documents': [
            {
            'query': query,
            'title': 'Title 1',
            'content': 'This iss the 1st content.',
            },
            {
            'query': query,
            'title': 'Title 2',
            'content': 'This iss the 2nd content.',
            },
        ]
    }
    return JsonResponse(data);
