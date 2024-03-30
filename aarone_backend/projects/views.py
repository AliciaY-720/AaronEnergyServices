from rest_framework import generics
from .models import Project, Image, Tag
from .serializers import ProjectSerializer, ImageSerializer, TagSerializer


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
    # def get_queryset(self):
    #     project_id = self.kwargs['project_id']
    #     return Image.objects.filter(project_id=project_id)
    def get_queryset(self):
        # project_id = self.request.query_params.get('project_id')
        # print(project_id)
        # if project_id is not None:
        #     return Image.objects.filter(project__id=project_id)
        # else:
        #     return Image.objects.none()
        project_id = self.kwargs.get('pk')
        if project_id is not None:
            return Image.objects.filter(project__id=project_id)
        else:
            return Image.objects.none()


class TagListView(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class TagDetailView(generics.RetrieveAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
