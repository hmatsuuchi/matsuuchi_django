# Generated by Django 5.0.2 on 2024-04-21 02:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0007_alter_fishfeeding_person'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='url_stub_secondary',
            field=models.CharField(default='default', max_length=100),
            preserve_default=False,
        ),
    ]
