from django.shortcuts import render, resolve_url
from django.urls import reverse
#from django.http import HttpResponse
from django.shortcuts import resolve_url as r

# Create your views here.
def home(request):
    return render(request, 'index.html')

def application(request):
    return render(request, 'application.html')

#def application(request):
    #return resolve_url(request, 'application.html')

def get_absolute_url(self):
        return r('core:home', kwargs={'slug': self.slug})
