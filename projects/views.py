import json
from datetime import datetime, timedelta
from django.contrib.auth.mixins import UserPassesTestMixin
from django. http import JsonResponse
from django.shortcuts import render
from django.views import View
from .models import Projects, FishFeeding

# Hiroki's projects
class GlassmorphismView(View):
    def get(self, request):
        project = Projects.objects.get(id=3)

        context = {
            'project': project,
        }

        return render(request, 'projects/glassmorphism/glassmorphism.html', context)
    
# Jba's projects
class FishFeedingView(UserPassesTestMixin, View):
    # checks of logged in user is in the Matsuuchi group
    def test_func(self):
        return self.request.user.groups.filter(name='matsuuchi').exists()
    
    def get(self, request):
        # get date for today adjusted for UTC+9
        today = datetime.now() + timedelta(hours=9)

        # get all records except for today
        all_records = FishFeeding.objects.all().order_by('-date')

        context = {
            'all_records': all_records,
            'today': today.strftime('%Y-%m-%d'),
        }

        return render(request, 'projects/fish_feeding/fish_feeding.html', context)
    
    def post(self, request):
        # get data from request
        data = json.loads(request.body)

        # get date for today adjusted for UTC+9
        today = datetime.now() + timedelta(hours=9)

        # check if there is a record for today
        record_today = FishFeeding.objects.filter(date=today)

        # if there is a record, update it
        if len(record_today) != 0:
            record_today[0].fish_fed_person = data['fish_fed_person']
            record_today[0].tank_cleaned_person = data['tank_cleaned_person']
            record_today[0].save()

            return JsonResponse({'status': 'record updated'})
        else:
            new_record = FishFeeding(
                date=today,
                fish_fed_person=data['fish_fed_person'],
                tank_cleaned_person=data['tank_cleaned_person']
                )
            new_record.save()
            
            return JsonResponse({'status': 'record created'})