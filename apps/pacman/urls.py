from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index, name='home'),
    url(r'^login$', views.login, name='login'),
    url(r'^process_login$', views.process_login, name='process_login'),
    url(r'^logout$', views.logout, name='logout'),
]
