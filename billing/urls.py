from django.urls import path
from .views import get_invoices
from django.http import JsonResponse

def billing_home(request):
    return JsonResponse({"message": "Welcome to Billing API!"})
urlpatterns=[
    path('', billing_home, name='billing_home'),
    path('invoices/',get_invoices,name='get_invoices')
]