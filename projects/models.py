from django.db import models

class Projects(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateField()
    url = models.URLField()

    class Meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"

    def __str__(self):
        return self.name