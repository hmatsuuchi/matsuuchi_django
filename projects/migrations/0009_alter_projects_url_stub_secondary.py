# Generated by Django 5.0.2 on 2024-04-21 02:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0008_projects_url_stub_secondary'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='url_stub_secondary',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
