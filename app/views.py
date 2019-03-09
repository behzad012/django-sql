from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return render(request, 'index.html', {})

def register(request):
    return render(request, 'pages/register.html', {})

def infinite(request):
    return render(request, 'pages/infinite-scroll.html', {})

def members(request):
    print('---------------------------------------------------------------------')

    registerName = request.POST['name']
    registerPassword = request.POST['password']
    registerEmail = request.POST['email']
    getRegisterEmail = request.GET['email']
    print('---------------------------------------------------------------------')
    print(registerName, registerPassword, registerEmail)
    print('---------------------------------------------------------------------')
    return HttpResponse(registerName,registerPassword,registerEmail)

    #
    # return (registerName,registerPassword,registerEmail)

def search(request):
    searchEmail = request.POST('email')
    print(searchEmail)