# Generated by Django 5.0.2 on 2024-04-21 03:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0009_alter_projects_url_stub_secondary'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='fishfeeding',
            name='person',
        ),
        migrations.AddField(
            model_name='fishfeeding',
            name='fish_fed_person',
            field=models.IntegerField(choices=[(0, 'Nobody'), (1, 'Hiroki'), (2, 'Obitan'), (3, 'Jba'), (9, 'Other')], default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='fishfeeding',
            name='tank_cleaned_person',
            field=models.IntegerField(choices=[(0, 'Nobody'), (1, 'Hiroki'), (2, 'Obitan'), (3, 'Jba'), (9, 'Other')], default=0),
            preserve_default=False,
        ),
    ]
