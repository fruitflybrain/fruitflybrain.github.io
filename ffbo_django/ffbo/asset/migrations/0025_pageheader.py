# Generated by Django 3.0.7 on 2020-07-14 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('asset', '0024_frontpagevideo_imagefile'),
    ]

    operations = [
        migrations.CreateModel(
            name='PageHeader',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=1024)),
                ('subtitle', models.CharField(blank=True, max_length=1024)),
                ('desc', models.TextField()),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]