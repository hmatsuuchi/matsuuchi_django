from django.shortcuts import render
from django.views import View

class GlassmorphismView(View):
    def get(self, request):

        return render(request, 'projects/glassmorphism/glassmorphism.html')