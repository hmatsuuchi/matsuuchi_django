from django.shortcuts import render
from django.views import View
from projects.models import Projects


class IndexView(View):
    def get(self, request):
        return render(request, 'profiles/index.html')

class HirokiView(View):
    def get(self, request):

        projects = Projects.objects.all().filter(user=2)

        context = {
            'projects': projects
        }

        return render(request, 'profiles/hiroki.html', context)
    
class ObitanView(View):
    def get(self, request):
        return render(request, 'profiles/obitan.html')