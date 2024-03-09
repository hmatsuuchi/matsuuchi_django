from django.shortcuts import render
from django.views import View
from .models import Projects

class GlassmorphismView(View):
    def get(self, request):
        project = Projects.objects.get(id=3)

        context = {
            'project': project,
        }

        return render(request, 'projects/glassmorphism/glassmorphism.html', context)
    
class GlassmorphismTestView(View):
    def get(self, request):
        project = Projects.objects.get(url_stub='glassmorphism')

        context = {
            'project': project,
        }

        return render(request, 'projects/glassmorphism/glassmorphism_test.html', context)