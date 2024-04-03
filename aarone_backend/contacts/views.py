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
    template_name = 'welcome.html'  # Set the template name for the email content

    def perform_create(self, serializer):
        # Call the parent perform_create method to save the contact instance
        instance = serializer.save()

        # Send email notification with email template
        subject = 'New Contact Created'
        html_content = render_to_string(
            self.template_name,
            {
                'name': instance.name,
                'email': instance.email,
                'query': instance.query,
            }
        )
        from_email = settings.DEFAULT_FROM_EMAIL
        to_emails = [instance.email]  # Use the email field from the contact instance

        msg = EmailMultiAlternatives(subject, '', from_email, to_emails)
        msg.attach_alternative(html_content, 'text/html')
        msg.send()


class ContactRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
