from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product
from .serializers import ProductSerializer
@api_view(['GET'])
def product_list(request):
    category=request.GET.get("category")
    if category:
        Product.objects.filter(category__name=category)
    else:
        products=Product.objects.all()
    serializer=ProductSerializer(products,many=True)
    return Response(serializer.data)
@api_view(['GET'])
def low_stock_products(request):
    low_stock_threshold = 5  
    low_stock_items = Product.objects.filter(quantity__lt=low_stock_threshold)  
    
    serializer = ProductSerializer(low_stock_items, many=True)
    return Response(serializer.data)