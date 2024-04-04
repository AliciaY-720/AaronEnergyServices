from rest_framework import generics
from .models import Project, Image, Service
from .serializers import ProjectSerializer, ImageSerializer, ServiceSerializer


class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetailView(generics.RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ImageListView(generics.ListAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

class ImageDetailView(generics.RetrieveAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


class ProjectImagesView(generics.ListAPIView):
    serializer_class = ImageSerializer
    def get_queryset(self):
        project_id = self.kwargs.get('pk')
        if project_id is not None:
            return Image.objects.filter(project__id=project_id)
        else:
            return Image.objects.none()

class ServiceProjectsView(generics.ListAPIView):
    serializer_class = ProjectSerializer
    def get_queryset(self):
        service_id = self.kwargs.get('pk')
        if service_id is not None:
            return Project.objects.filter(service__id=service_id)
        else:
            return Project.objects.none()


class ServiceListView(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class ServiceDetailView(generics.RetrieveAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
