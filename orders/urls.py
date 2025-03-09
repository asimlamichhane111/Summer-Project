from django.urls import path
from .views import get_orders,home
urlpatterns=[
    path('api/orders/',get_orders,name='get_orders'),
    path('', home, name='home'), 
]