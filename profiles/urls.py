from django.urls import path

from .views import IndexView, HirokiView, ObitanView

urlpatterns = [
    # all profiles
    path('', IndexView.as_view(), name='index'),
    # Hiroki
    path('hiroki/', HirokiView.as_view(), name='hiroki'),
    # Olivia
        path('obitan/', ObitanView.as_view(), name='obitan'),
]
