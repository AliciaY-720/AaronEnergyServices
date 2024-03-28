from django.test import TestCase
from .models import Project, Image, Tag, Service
from django.urls import reverse

PATH = "/api"
class ProjectModelTestCase(TestCase):
    def setUp(self):
        self.project = Project.objects.create(name="Test Project", description="Test description", is_featured=True)

    def test_project_creation(self):
        self.assertEqual(self.project.name, "Test Project")
        self.assertEqual(self.project.description, "Test description")
        self.assertTrue(self.project.is_featured)


class ImageModelTestCase(TestCase):
    def setUp(self):
        self.project = Project.objects.create(name="Test Project", description="Test description", is_featured=True)
        self.image = Image.objects.create(project=self.project, image_url="https://example.com/image.jpg")

    def test_image_creation(self):
        self.assertEqual(self.image.project, self.project)
        self.assertEqual(self.image.image_url, "https://example.com/image.jpg")


class TagModelTestCase(TestCase):
    def setUp(self):
        self.tag = Tag.objects.create(name="Test Tag")

    def test_tag_creation(self):
        self.assertEqual(self.tag.name, "Test Tag")


class ProjectViewsTestCase(TestCase):

    def setUp(self):
        self.project = Project.objects.create(name="Test Project", description="Test description", is_featured=True)

    def test_project_list_view(self):
        response = self.client.get(PATH + '/projects/')
        self.assertEqual(response.status_code, 200)

    def test_project_detail_view(self):
        response = self.client.get(PATH + f'/projects/{self.project.pk}/')
        self.assertEqual(response.status_code, 200)


class ImageViewsTestCase(TestCase):
    def test_image_list_view(self):
        response = self.client.get(PATH + '/images/')
        self.assertEqual(response.status_code, 200)

    def test_image_detail_view(self):
        project = Project.objects.create(name="Test Project", description="Test description", is_featured=True)
        image = Image.objects.create(project=project, image_url="https://example.com/image.jpg")
        response = self.client.get(PATH + f'/images/{image.pk}/')
        self.assertEqual(response.status_code, 200)


class TagViewsTestCase(TestCase):
    def test_tag_list_view(self):
        response = self.client.get(PATH + '/tags/')
        self.assertEqual(response.status_code, 200)

    def test_tag_detail_view(self):
        tag = Tag.objects.create(name="Test Tag")
        response = self.client.get(PATH + f'/tags/{tag.pk}/')
        self.assertEqual(response.status_code, 200)
