from django.db import models

class Invoice(models.Model):
    order=models.ForeignKey('orders.Order',on_delete=models.CASCADE)
    total_price=models.DecimalField(max_digits=10,decimal_places=2)
    payment_status=models.CharField(max_length=50,choices=[('pending','Pending'),('paid','Paid')])

    def __str__(self):
        return f"Invoice {self.id} for order {self.order.id}"