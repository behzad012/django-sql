from django.shortcuts import render
from django.http import HttpResponse,HttpResponseBadRequest
from .models import registers
from django.http import Http404
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.cache import cache_page
from django.template import RequestContext
# from django.views.decorators.csrf import requires_csrf_token
import json
from django.core.serializers.json import DjangoJSONEncoder

def home(request):
    return render(request, 'index.html', {})

def register(request):
    return render(request, 'pages/register.html', {})

def infinite(request):
    return render(request, 'pages/infinite-scroll.html', {})

@cache_page(60 * 15)
@csrf_protect
def members(request):
    if( request.POST.get('register',False)):
        try:
            registerName = request.POST['name']
            registerPassword = request.POST['password']
            registerEmail = request.POST['email']
            newMember = registers(name=registerName, password=registerPassword, email=registerEmail)
            newMember.save()
            result = {'نام': newMember.name,
                      'کلمه عبور': newMember.password,
                      'ایمیل': newMember.email,
                      'تاریخ ثبت نام': newMember.date}
            return HttpResponse(json.dumps(result,default=str))
        except Exception as e:
            return HttpResponseBadRequest(e)


    if (request.method == 'GET'):
        try:
            member = registers.objects.get(email=request.GET['email'])
            return HttpResponse('GET ok!')
        except Exception as e:
            return HttpResponseBadRequest(e)

    if(request.method=='UPDATE'):
        try:
            registerName = request.UPDATE['name']
            registerPassword = request.UPDATE['password']
            return HttpResponse('POST ok!')
        except Exception as e:
            return HttpResponseBadRequest(e)

    if( request.POST.get('delete',False) ):
        try:
            print('<<<<','enter delete','>>>>>>')
            member = registers.objects.get(email=request.POST['email'])
            member.delete()
            print('===',member,'====')
            return HttpResponse('deleted!')
        except Exception as e:
            return HttpResponseBadRequest(e)
    return Http404()

# @requires_csrf_token
@cache_page(60 * 15)
@csrf_protect
def search(request):
    try:
        member = registers.objects.get(email=request.GET['email'])
        result = {'نام': member.name,
                  'کلمه عبور': member.password,
                  'ایمیل': member.email,
                  'تاریخ ثبت نام': member.date}
        return HttpResponse(json.dumps(result,default=str))
    except Exception as e:
        return HttpResponseBadRequest(e)



