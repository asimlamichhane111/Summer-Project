from django.db import models

class Product(models.Model):
    name=models.CharField(max_length=255)
    price=models.DecimalField(max_digits=10,decimal_places=2)
    quantity=models.IntegerField()
    low_stock_threshold=models.IntegerField(default=5)

    def __str__(self):
        return f"{self.name} - {self.quantity} in stock"
    
    def is_low_stock(self):
        return self.quantity<= self.low_stock_threshold