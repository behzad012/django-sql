from django.contrib import admin
from .models import *

@admin.register(registers)
class registersAdmin(admin.ModelAdmin):
    pass
