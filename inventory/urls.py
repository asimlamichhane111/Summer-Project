from django.urls import path
from .views import low_stock_products, product_list

def inventory_home(request):
    from django.http import JsonResponse
    return JsonResponse({"message": "Welcome to Inventory API!"})
urlpatterns=[
    path('', inventory_home, name='inventory_home'),
    path('api/products/',product_list,name='product-list'),
    path('low-stock/',low_stock_products,name='low-stock-products')
]
