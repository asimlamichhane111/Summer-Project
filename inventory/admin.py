from django.contrib import admin
from.models import Product

class ProductAdmin(admin.ModelAdmin):
    list_display=('name','price','quantity','low_stock_threshold') 
    list_editable=('quantity',)
    search_fields=('name',)   

    def is_low_stock(self,obj):
        return "low stock!!" if obj.quantity<5 else "ok"
    is_low_stock.short_description="Stock Status"

admin.site.register(Product,ProductAdmin)
