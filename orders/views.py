from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Order
from .serializers import OrderSerializer

@api_view(['GET'])
def get_orders(request):
    orders = Order.objects.all()
    serializer = OrderSerializer(orders, many=True)
    return Response({'orders': serializer.data})

def home(request):
    return JsonResponse({"message": "Welcome to the orders API"})
