from django.shortcuts import render
from django.views import View


class IndexView(View):
    def get(self, request):
        return render(request, 'profiles/index.html')

class HirokiView(View):
    def get(self, request):
        return render(request, 'profiles/hiroki.html')
    
class ObitanView(View):
    def get(self, request):
        return render(request, 'profiles/obitan.html')