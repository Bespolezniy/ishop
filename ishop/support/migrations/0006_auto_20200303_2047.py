# Generated by Django 3.0.3 on 2020-03-03 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('support', '0005_auto_20200303_2000'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='supportmessage',
            name='image',
        ),
        migrations.AddField(
            model_name='supportmessage',
            name='url',
            field=models.URLField(blank=True),
        ),
    ]