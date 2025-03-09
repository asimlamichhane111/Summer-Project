from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import UserProfile
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
@api_view(["POST"])
def register_customer(request):
    username=request.data.get("username")
    email=request.data.get("email")
    password=request.data.get("password")

    if User.objects.filter(username=username).exists():
        return Response({"error":"Username alredy taken"},status=400)
    
    user=User.objects.create(username=username,email=email)
    user.set_password(password)
    user.save()

    UserProfile.objects.create(user=user,role="customer")
    return Response({"message":"Customer registered successfully"})

@api_view(['POST'])
def register_owner(request):
    username=request.data.get("username")
    email=request.data.get("email")
    password=request.data.get("password")

    if User.objects.filter(username=username).exists():
        return Response({"error":"Username alredy taken"},status=400)
    
    user=User.objects.create(username=username,email=email)
    user.set_password(password)
    user.save()

    UserProfile.objects.create(user=user,role="owner")
    return Response({"message":"Store owner registered successfully"})

@api_view(['POST'])
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    user = authenticate(username=username, password=password)

    if user:
        refresh = RefreshToken.for_user(user)
        role = user.userprofile.role
        return Response({
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "role": role
        })

    return Response({"error": "Invalid credentials"}, status=400)