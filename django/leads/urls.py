from django.urls import path
from . import views

urlpatterns = [
    path('<str:query>/', views.queryResultView),
    path('', views.LeadListCreate.as_view()),
]
