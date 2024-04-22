from django.db import models
from django.contrib.auth.models import User

# Contains all project information
class Projects(models.Model):
    project_name = models.CharField(max_length=100)
    project_subtitle = models.CharField(max_length=100)
    project_description = models.TextField()

    user = models.ManyToManyField(User, default=1)

    creation_date = models.DateField()
    update_date = models.DateField()

    url_stub = models.CharField(max_length=100)
    url_stub_secondary = models.CharField(max_length=100, blank=True, null=True)

    login_required = models.BooleanField(default=False)

    class Meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"

    def __str__(self):
        return f"{self.project_name} - {self.creation_date}"
    
# Fish Feeding (Jba & Obitan)
class FishFeeding(models.Model):
    class PersonChoices(models.IntegerChoices):
        無 = 0
        ダダ = 1
        オビたん = 2
        ジェバー = 3
        不明 = 9

    date    = models.DateField()
    fish_fed_person  = models.IntegerField(choices=PersonChoices.choices)
    tank_cleaned_person  = models.IntegerField(choices=PersonChoices.choices)

    def day_of_week_japanese(self):
        day_of_week = self.date.weekday()
        return ["月", "火", "水", "木", "金", "土", "日"][day_of_week]

    class Meta:
        verbose_name = "Fish Feeding (Jba & Obitan)"
        verbose_name_plural = "Fish Feeding (Jba & Obitan)"

    def __str__(self):
        return f"{self.id} ({self.date})"