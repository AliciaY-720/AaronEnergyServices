from celery import shared_task
from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from django.conf import settings

@shared_task
def send_email_task(instance_name, instance_email, instance_query):
    # Send email notification with email template
    subject = "Thanks for your message, we'll get back to you soon."
    name_parts = instance_name.split()
    first_name = "customer"
    if name_parts:  # Check if name_parts is not empty
        first_element = name_parts[0]  # Get the first element
        if first_element and first_element[0].islower():  # Check if the first character is lowercase
            # Capitalize the first character
            first_name = first_element[0].upper() + first_element[1:]
    html_content = render_to_string('new-email.html', {'name': first_name, 'email': instance_email, 'query': instance_query})
    from_email = settings.DEFAULT_FROM_EMAIL
    to_emails = [instance_email]
    msg = EmailMessage(subject, html_content, from_email, to_emails)
    msg.content_subtype = "html"  # Ensure content is treated as HTML
    msg.send()

def send_email_about_new_query_to_aaron_task(instance_name, instance_email, instance_query):
    # Send email to aaron
    from_email = settings.DEFAULT_FROM_EMAIL
    subject_2 = 'New Contact Created'
    html_content_2 = render_to_string('welcome.html', {'name': instance_name, 'email': instance_email, 'query': instance_query})
    msg_2 = EmailMessage(subject_2, html_content_2, from_email, [settings.EMAIL_HOST_USER])
    msg_2.content_subtype = "html"  # Ensure content is treated as HTML
    msg_2.send()


