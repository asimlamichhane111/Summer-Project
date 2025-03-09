from django.urls import path
from .views import login, register_customer, register_owner
urlpatterns=[
    path('api/register/customer/',register_customer,name='register-customer'),
    path('api/register/owner/',register_owner,name='register-owner'),
    path('api/login/',login,name='login'),
]