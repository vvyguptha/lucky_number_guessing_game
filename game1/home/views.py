from django.shortcuts import render
import random

# Create your views here.
def home(request):
    n= random.randint(1,101)
    context={'number':n}
    return render(request,'home.html', context)
