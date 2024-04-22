from django.urls import path

from . import views

urlpatterns = [
    # Hiroki's projects
    path('glassmorphism/', views.GlassmorphismView.as_view(), name='glassmorphism'),
    # Jba's projects
    path('fish_feeding/', views.FishFeedingView.as_view(), name='fish_feeding'),
]
