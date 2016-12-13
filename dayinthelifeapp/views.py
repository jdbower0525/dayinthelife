from django.shortcuts import render
from django.http import HttpResponse
from .serializers import StudentSerializer
from .serializers import ChoiceSerializer
from rest_framework import viewsets
from .models import Student
from .models import Choice

# Create your views here.


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all().order_by('id')
    serializer_class = StudentSerializer


class ChoiceViewSet(viewsets.ModelViewSet):
    queryset = Choice.objects.all().order_by('id')
    serializer_class = ChoiceSerializer


def index(request):
    return HttpResponse("This is a thing")
