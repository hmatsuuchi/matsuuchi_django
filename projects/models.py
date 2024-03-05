from django.db import models
from django.contrib.auth.models import User

class Projects(models.Model):
    project_name = models.CharField(max_length=100)
    project_subtitle = models.CharField(max_length=100)
    project_description = models.TextField()

    user = models.ForeignKey(User, on_delete=models.SET_DEFAULT, default=1)

    creation_date = models.DateField()
    update_date = models.DateField()

    url_stub = models.CharField(max_length=100)

    class Meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"

    def __str__(self):
        return f"{self.project_name} - {self.creation_date} ({self.user})"