from django.urls import include, path

from .views import IndexView, HirokiView, ObitanView

urlpatterns = [
    # all profiles
    path('', IndexView.as_view(), name='index'),
    # Hiroki
    path('hiroki/', HirokiView.as_view(), name='hiroki'),
    path('hiroki/projects/', include('projects.urls')),
    # Olivia
        path('obitan/', ObitanView.as_view(), name='obitan'),
]
