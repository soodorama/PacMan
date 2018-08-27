from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse

def index(request):
    if 'user_id' not in request.session:
        return redirect(reverse('login'))
    else:
        return render(request, "pacman/index.html")

def login(request):
    if 'user_id' in request.session:
        return redirect(reverse('home'))
    else:
        return render(request, "pacman/login.html")

def process_login(request):
    request.session['user_id'] = request.POST['user_id']
    return redirect(reverse('home'))

def logout(request):
    request.session.clear()
    return redirect(reverse('login'))