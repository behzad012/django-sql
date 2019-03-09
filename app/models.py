from django.db import models
from datetime import *

class registers(models.Model):
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.EmailField(max_length=200)
    date = models.DateField(null=True, blank=True, default=datetime.now)