from django.shortcuts import render
from django.http import JsonResponse
from .models import Invoice

def get_invoices(request):
    invoices=list(Invoice.objects.values())
    return JsonResponse({'invoices':invoices})
