"""dayinthelifeproj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from dayinthelifeapp import views
import dayinthelifeapp
from django.contrib.auth import views as auth_views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^door$', views.door, name='door'),
    url(r'^coffee$', views.coffee, name='coffee'),
    url(r'^gotoclass$', views.gotoclass, name='gotoclass'),
    url(r'^python$', views.python, name='python'),
    url(r'^userinterface$', views.userinterface, name='userinterface'),
    url(r'^uilesson$', views.uilesson, name='uilesson'),
    url(r'^pythonlesson$', views.pythonlesson, name='pythonlesson'),
    url(r'^pythonhello$', views.pythonhello, name='pythonhello'),
    url(r'^uihello$', views.uihello, name='uihello'),
    url(r'^story$', views.story, name='story'),
    url(r'^logout/$', auth_views.logout, {'next_page': '/dayinthelifeapp/login/'}, name='logout'),
    url(r'^register/$', dayinthelifeapp.views.register, name='register'),
    url('^', include('django.contrib.auth.urls')),
]
