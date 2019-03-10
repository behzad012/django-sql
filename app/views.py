from django.shortcuts import render
from django.http import HttpResponse
from .models import registers
from django.http import Http404
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.cache import cache_page
from django.template import RequestContext

def home(request):
    return render(request, 'index.html', {})

def register(request):
    return render(request, 'pages/register.html', {})

def infinite(request):
    return render(request, 'pages/infinite-scroll.html', {})

@cache_page(60 * 15)
@csrf_protect
def members(request):
    csrfContext = RequestContext(request)
    print('---------------', csrfContext.get('email'), '----------------')
    if (request.method == 'GET'):
        return HttpResponse('GET method')
    if (request.method == 'POST'):
        return HttpResponse('POST method')
    if (request.method == 'DELETE'):
        return HttpResponse('DELETE method')
    print('---------------------------------------------------------------------')
    allmembers = registers.objects.all()
    # member = registers.objects.get(name='behzad')
    # registerName = request.POST['name']
    # registerPassword = request.POST['password']
    # registerEmail = request.POST['email']
    # getRegisterEmail = request.GET['email']

    print('---------------------------------------------------------------------')
    # print(allmembers.values('name','email','password','date'))
    # print(member.name,member.password,member.email,member.date)
    print('---------------------------------------------------------------------')
    # return HttpResponse(getRegisterEmail)

@cache_page(60 * 15)
@csrf_protect
def search(request):
    csrfContext = RequestContext(request)
    print('---------------', csrfContext.get('email'), '----------------')
    member = registers.objects.get(email=request.GET['email'])
    result = [member.name,member.password,member.email,member.date]

    # newMember = registers(name='behzad',password='sdfl2342fsd', email='behzad@gmail.com')
    # newMember.save()
    return HttpResponse(result)
    # try:
    #     # searchEmail = request.GET('email')
    #     print('searchEmail')
    #     # member = registers.objects.get(email=request.GET('email'))
    #     return HttpResponse('searchEmail')
    # except:
    #     raise Http404('not found!')


