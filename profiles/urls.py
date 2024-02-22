from django.urls import path

from .views import IndexView, HirokiView

urlpatterns = [
    # all profiles
    path('', IndexView.as_view(), name='index'),
    # Hiroki
    path('hiroki', HirokiView.as_view(), name='hiroki'),
]
