from django.db import models
from datetime import *

class registers(models.Model):
    name = models.CharField(max_length=100, null=False, blank=False)
    password = models.CharField(max_length=100, null=False, blank=False)
    email = models.EmailField(max_length=200, unique=True, null=False, blank=False)
    date = models.DateField(null=True, blank=True, auto_now_add=True)

    def __str__(self):
        return self.name+ " , " +self.password+ " , " +self.email