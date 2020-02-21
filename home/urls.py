from django.urls import path
from . import views

urlpatterns = [
    path('', views.index.as_view(), name="index"),
    path('game', views.game.as_view(), name="game"),
    path('list',views.ScoreListView.as_view(), name="list"),
]