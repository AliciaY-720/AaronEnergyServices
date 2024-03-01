from rest_framework.test import APIClient
from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework import status
from django.test import TestCase
from .models import Contact
from .serializers import ContactSerializer


class ContactModelTestCase(TestCase):
    def setUp(self):
        self.contact = Contact.objects.create(
            name='John Doe',
            email='john@example.com',
            phone='1234567890',
            query='Test query'
        )

    def test_contact_creation(self):
        self.assertEqual(self.contact.name, 'John Doe')
        self.assertEqual(self.contact.email, 'john@example.com')
        self.assertEqual(self.contact.phone, '1234567890')
        self.assertEqual(self.contact.query, 'Test query')


class ContactAPITestCase(TestCase):
    def setUp(self):
        # Create a user and authenticate the client
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.client = APIClient()
        self.client.force_authenticate(user=self.user)  # Force authentication for the test client

        self.contact_data = {
            'name': 'Jane Smith',
            'email': 'jane@example.com',
            'phone': '0987654321',
            'query': 'Another test query'
        }
        self.contact = Contact.objects.create(**self.contact_data)

    def test_create_contact(self):
        response = self.client.post(reverse('contacts-create'), self.contact_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Contact.objects.count(), 2)

    def test_retrieve_contact(self):
        response = self.client.get(reverse('contacts-retrieve-update-delete', kwargs={'pk': self.contact.pk}))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, ContactSerializer(self.contact).data)

    def test_update_contact(self):
        updated_data = {
            'name': 'Updated Name',
            'email': 'updated@example.com',
            'phone': '1111111111',
            'query': 'Updated query'
        }
        response = self.client.put(reverse('contacts-retrieve-update-delete', kwargs={'pk': self.contact.pk}),
                                   updated_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.contact.refresh_from_db()
        self.assertEqual(self.contact.name, updated_data['name'])
        self.assertEqual(self.contact.email, updated_data['email'])
        self.assertEqual(self.contact.phone, updated_data['phone'])
        self.assertEqual(self.contact.query, updated_data['query'])

    def test_delete_contact(self):
        response = self.client.delete(reverse('contacts-retrieve-update-delete', kwargs={'pk': self.contact.pk}))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Contact.objects.filter(pk=self.contact.pk).exists())

