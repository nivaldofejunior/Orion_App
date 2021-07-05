from django.conf.urls import url
from OrionApp import views

urlpatterns=[
    url(r'^projeto/$', views.ProjetoApi),
    url(r'^projeto/([0-9]+)$', views.ProjetoApi)
]
