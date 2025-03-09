from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    role_choices=[('customer','Customer'),('owner','Store Owner'),]
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    role=models.CharField(max_length=10,choices=role_choices,default='customer')

    def __str__(self):
        return f"{self.user.username} - {self.role}"