from django.urls import path

from . import views

urlpatterns = [
    path('glassmorphism/', views.GlassmorphismView.as_view(), name='glassmorphism'),
    path('glassmorphism-test/', views.GlassmorphismTestView.as_view(), name='glassmorphism_test'),
]
