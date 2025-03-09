from django.contrib import admin
from .models import Order

class OrderAdmin(admin.ModelAdmin):
    list_display=('customer_name','order_date','status')
    list_filter=('status',)
    search_fields=('customer_name',)

admin.site.register(Order,OrderAdmin)
