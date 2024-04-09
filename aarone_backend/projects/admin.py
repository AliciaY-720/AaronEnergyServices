from django.contrib import admin
from .models import Project, Image, Service, TestModel


admin.site.register(Project)
admin.site.register(Image)
admin.site.register(Service)
admin.site.register(TestModel)