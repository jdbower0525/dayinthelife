from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Choice(models.Model):
    text = models.CharField(max_length=255)
    def __str__(self):
        return str(self.id)


class Student(models.Model):
    choices = models.CharField(default='', max_length=255)
    user = models.OneToOneField(User)

    def __str__(self):
        return self.user.username
