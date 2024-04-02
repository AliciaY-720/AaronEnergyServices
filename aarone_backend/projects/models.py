from django.db import models


class Service(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=1000, blank=False)
    icon = models.CharField(max_length=50, default="assets/images/icon/idea.png")
    def __str__(self):
        return self.name

class Project(models.Model):
    name = models.CharField(max_length=50, blank=False)
    description = models.TextField(max_length=1000, blank=False)
    is_featured = models.BooleanField(blank=False, default=False)
    service = models.ForeignKey(Service, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name


class Image(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    image_url = models.TextField(max_length=1000, default="")

    def __str__(self):
        return f"Image for {self.project.name}"


class Tag(models.Model):
    name = models.CharField(max_length=50)
    projects = models.ManyToManyField(Project)

    def __str__(self):
        return self.name


