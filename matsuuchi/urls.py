from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    # admin
    path('admin/', admin.site.urls),
    # projects
    path('projects/', include('projects.urls')),
    # profiles - index of matsuuchi.com
    path('', include('profiles.urls')),
]
