from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return render(request, 'index.html', {})

def register(request):
    return render(request, 'pages/register.html', {})

def infinite(request):
    return render(request, 'pages/infinite-scroll.html', {})