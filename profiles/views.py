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
        all_projects = Projects.objects.all().filter(user=4)

        context = {
            'all_projects': all_projects
        }

        return render(request, 'profiles/obitan.html', context)
    
class JbaView(View):
    def get(self, request):
        all_projects = Projects.objects.all().filter(user=3)

        context = {
            'all_projects': all_projects
        }

        return render(request, 'profiles/jba.html', context)