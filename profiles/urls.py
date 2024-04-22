from django.urls import include, path

from .views import IndexView, HirokiView, ObitanView, JbaView

urlpatterns = [
    # all profiles
    path('', IndexView.as_view(), name='index'),
    # Hiroki
    path('hiroki/', HirokiView.as_view(), name='hiroki'),
    path('hiroki/projects/', include('projects.urls')),
    # Obitan
    path('obitan/', ObitanView.as_view(), name='obitan'),
    path('obitan/projects/', include('projects.urls')),
    # Jba
    path('jba/', JbaView.as_view(), name='jba'),
    path('jba/projects/', include('projects.urls')),
]
