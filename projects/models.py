from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=50, blank=False)
    description = models.TextField(max_length=1000, blank=False)
    is_featured = models.BooleanField(blank=False, default=False)

    def __str__(self):
        return self.name


class Image(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='project_images/')

    def __str__(self):
        return f"Image for {self.project.name}"


class Tag(models.Model):
    name = models.CharField(max_length=50)
    projects = models.ManyToManyField(Project)

    def __str__(self):
        return self.name
