# Generated by Django 3.1.3 on 2021-03-14 21:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asset', '0030_auto_20210219_1528'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='url',
            field=models.CharField(max_length=128, null=True),
        ),
    ]
