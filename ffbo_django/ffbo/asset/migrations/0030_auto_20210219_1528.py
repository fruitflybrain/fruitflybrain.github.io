# Generated by Django 3.1.6 on 2021-02-19 15:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asset', '0029_brainmaps_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pageheader',
            name='desc',
            field=models.TextField(blank=True),
        ),
    ]
