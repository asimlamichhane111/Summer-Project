from django.db import models
class Order(models.Model):
    customer_name=models.CharField(max_length=255)
    order_date=models.DateTimeField(auto_now_add=True)
    status=models.CharField(max_length=20,choices=[('pending','Pending'),('completed','Completed'),('canceled','Canceled')])
    
    def __str__(self):
        return f"Order {self.id} - {self.customer_name}"