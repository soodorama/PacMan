from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from .models import *

def index(request):
    if 'user_id' not in request.session:
        return redirect(reverse('login'))
    else:
        # how tf do i get the top score to live update if you're on your best run
        context = {
            'header_text' : "PacMan!",
            'level' : 1,
            'top_score' : User.objects.get(id=request.session['user_id']).top_score,
            'prev_score' : User.objects.get(id=request.session['user_id']).prev_score,
        }
        return render(request, "pacman/index.html", context)

def login(request):
    if 'user_id' in request.session:
        return redirect(reverse('home'))
    else:
        return render(request, "pacman/login.html")

def process_login(request):
    User.objects.create(first_name="hi",last_name="bye",username="hibye",email="this@email.com",password="thisismypassword")
    request.session['user_id'] = request.POST['user_id']
    return redirect(reverse('home'))

# def all_scores(request):
#     user = User.objects.get(id=request.session['user_id'])
#     user = { 'user' : user }
#     return render(request, "pacman/all_scores.html", user)

def logout(request):
    request.session.clear()
    return redirect(reverse('login'))

def winner(request, score):
    user = User.objects.get(id=request.session['user_id'])
    if user.top_score < score:
        user.top_score = score
    return redirect(reverse('home'))
