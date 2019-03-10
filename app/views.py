from django.shortcuts import render
from django.http import HttpResponse
from .models import registers
from django.http import Http404

def home(request):
    return render(request, 'index.html', {})

def register(request):
    return render(request, 'pages/register.html', {})

def infinite(request):
    return render(request, 'pages/infinite-scroll.html', {})

def members(request):
    print('---------------------------------------------------------------------')
    allmembers = registers.objects.all()
    member = registers.objects.get(name='behzad')
    # registerName = request.POST['name']
    # registerPassword = request.POST['password']
    # registerEmail = request.POST['email']
    getRegisterEmail = request.GET['email']

    print('---------------------------------------------------------------------')
    # print(allmembers.values('name','email','password','date'))
    print(member.name,member.password,member.email,member.date)
    print('---------------------------------------------------------------------')
    return HttpResponse(getRegisterEmail)


def search(request):
    searchEmail = request.GET['email']
    print(searchEmail)
    member = registers.objects.get(email=request.GET['email'])
    return HttpResponse(member)

    # try:
    #     # searchEmail = request.GET('email')
    #     print('searchEmail')
    #     # member = registers.objects.get(email=request.GET('email'))
    #     return HttpResponse('searchEmail')
    # except:
    #     raise Http404('not found!')


