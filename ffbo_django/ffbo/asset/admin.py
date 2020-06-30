from django.contrib import admin
from .models import Member, Component, Gallery, Post, Announcement, BrainMaps
# Register your models here.
admin.site.register(Member)
admin.site.register(Component)
admin.site.register(Gallery)
admin.site.register(Post)
admin.site.register(Announcement)
admin.site.register(BrainMaps)
