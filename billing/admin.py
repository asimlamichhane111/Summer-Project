from django.contrib import admin
from .models import Invoice

class InvoiceAdmin(admin.ModelAdmin):
    list_display=('order','total_price','payment_status')
    list_filter=('payment_status',)
    search_fields=('order_id',)

admin.site.register(Invoice,InvoiceAdmin)
