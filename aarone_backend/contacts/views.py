from django.shortcuts import render
from rest_framework import generics
from .models import Contact
from .serializers import ContactSerializer
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from django.conf import settings

class ContactsCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    template_name = 'new-email.html' # Set the template name for the email content
    template_name_2 = 'welcome.html'

    def perform_create(self, serializer):
        # Call the parent perform_create method to save the contact instance
        instance = serializer.save()

        # Send email notification with email template
        subject = "Thanks for your message, we'll get back to you soon."
        subject_2 = 'New Contact Created'
        name = instance.name.strip()  # Trim leading and trailing spaces
        name_parts = name.split()
        first_name = "customer"
        if name_parts:  # Check if name_parts is not empty
            first_element = name_parts[0]  # Get the first element
            if first_element and first_element[0].islower():  # Check if the first character is lowercase
                # Capitalize the first character
                first_name = first_element[0].upper() + first_element[1:]

        html_content = render_to_string(
            self.template_name,
            {
                'name': first_name,
                'email': instance.email,
                'query': instance.query,
            }
        )
        from_email = settings.DEFAULT_FROM_EMAIL
        to_emails = [instance.email]  # Use the email field from the contact instance

        msg = EmailMultiAlternatives(subject, '', from_email, to_emails)
        msg.attach_alternative(html_content, 'text/html')
        msg.send()

        html_content_2 = render_to_string(
            self.template_name_2,
            {
                'name': instance.name,
                'email': instance.email,
                'query': instance.query,
            }
        )
        to_emails_2 = [settings.EMAIL_HOST_USER]
        msg_2 = EmailMultiAlternatives(subject_2, '', from_email, to_emails_2)
        msg_2.attach_alternative(html_content_2, 'text/html')
        msg_2.send()


class ContactRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
