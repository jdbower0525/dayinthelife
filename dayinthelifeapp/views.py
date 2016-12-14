from django.shortcuts import render
from django.http import HttpResponseRedirect
from .serializers import StudentSerializer
from .serializers import ChoiceSerializer
from rest_framework import viewsets
from .models import Student
from .models import Choice
from .forms import UserForm
from .forms import StudentForm
from django.contrib.auth import authenticate
from django.contrib.auth import login

# Create your views here.


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all().order_by('id')
    serializer_class = StudentSerializer


class ChoiceViewSet(viewsets.ModelViewSet):
    queryset = Choice.objects.all().order_by('id')
    serializer_class = ChoiceSerializer


def register(request):
    if request.method == "GET":
        user_form = UserForm()
        student_form = StudentForm()
    elif request.method == "POST":
        user_form = UserForm(request.POST)
        student_form = StudentForm(request.POST)
        if user_form.is_valid():
            user = user_form.save()
            student = student_form.save(commit=False)
            student.user = user
            student.save()
            login(request, user)
            password = user.password
            user.set_password(password)
            user.save()
            user = authenticate(username=user.username, password=password)
            login(request, user)
            return HttpResponseRedirect('/dayinthelifeapp/')
    return render(request, 'register.html', {'user_form': user_form,
                                             'student_form': student_form})


def index(request):
    return render(request, 'dayinthelife.html')


def door(request):
    return render(request, 'door.html')


def coffee(request):
    return render(request, 'coffee.html')


def gotoclass(request):
    return render(request, 'gotoclass.html')


def python(request):
    return render(request, 'python.html')


def userinterface(request):
    return render(request, 'userinterface.html')


def uilesson(request):
    return render(request, 'uilesson.html')


def pythonlesson(request):
    return render(request, 'pythonlesson.html')


def uihello(request):
    return render(request, 'uihello.html')


def pythonhello(request):
    return render(request, 'pythonhello.html')


def story(request):
    return render(request, 'story.html')
