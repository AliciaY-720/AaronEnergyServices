from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=100, blank=False)
    email = models.CharField(max_length=50, blank=False)
    query = models.TextField(max_length=2000, blank=True, help_text='Enter your query')
