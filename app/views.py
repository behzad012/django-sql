from django.shortcuts import render
from django.http import HttpResponse,HttpResponseBadRequest
from .models import registers
from django.http import Http404
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.cache import cache_page
from django.template import RequestContext
# from django.views.decorators.csrf import requires_csrf_token
import traceback

def home(request):
    return render(request, 'index.html', {})

def register(request):
    return render(request, 'pages/register.html', {})

def infinite(request):
    return render(request, 'pages/infinite-scroll.html', {})

@cache_page(60 * 15)
@csrf_protect
def members(request):
    print('---------------------------------------------------------------------')
    if(request.method=='POST'):
        try:
            registerName = request.POST['name']
            registerPassword = request.POST['password']
            registerEmail = request.POST['email']
            newMember = registers(name=registerName, password=registerPassword, email=registerEmail)
            newMember.save()
            return HttpResponse('POST ok!')
        except Exception as e:
            return HttpResponseBadRequest(e)


    if (request.method == 'GET'):
        member = registers.objects.get(email=request.GET['email'])
    allmembers = registers.objects.all()
    # member = registers.objects.get(name='behzad')

    # getRegisterEmail = request.GET['email']

    print('---------------------------------------------------------------------')
    # print(allmembers.values('name','email','password','date'))
    # print(member.name,member.password,member.email,member.date)
    print('---------------------------------------------------------------------')
    return HttpResponse('ok')

# @requires_csrf_token
@cache_page(60 * 15)
@csrf_protect
def search(request):
    member = registers.objects.get(email=request.GET['email'])
    result = [member.name,member.password,member.email,member.date]


    return HttpResponse(member)
    # try:
    #     # searchEmail = request.GET('email')
    #     print('searchEmail')
    #     # member = registers.objects.get(email=request.GET('email'))
    #     return HttpResponse('searchEmail')
    # except:
    #     raise Http404('not found!')


