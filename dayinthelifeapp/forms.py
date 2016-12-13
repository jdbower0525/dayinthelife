from django import forms
from django.contrib.auth.models import User
from dayinthelifeapp.models import Student


class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['username', 'password', 'first_name', 'last_name', 'email']


class StudentForm(forms.ModelForm):

   class Meta:
       model = Student
       fields = ['choices']
