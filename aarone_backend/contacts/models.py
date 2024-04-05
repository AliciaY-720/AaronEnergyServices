from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save
from .tasks import send_email_task, send_email_about_new_query_to_aaron_task

class Contact(models.Model):
    name = models.CharField(max_length=100, blank=False)
    email = models.CharField(max_length=50, blank=False)
    query = models.TextField(max_length=2000, blank=False, help_text='Enter your query')

@receiver(post_save, sender=Contact)
def send_email_on_contact_save(sender, instance, created, **kwargs):
    if created:  # Only trigger the task if a new Contact instance was created
        send_email_task.delay(instance.name.strip(), instance.email, instance.query)
        # send_email_about_new_query_to_aaron_task.delay(instance.name.strip(), instance.email, instance.query)
