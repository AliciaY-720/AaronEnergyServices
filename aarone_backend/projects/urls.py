from django.urls import path, re_path
from . import views

urlpatterns = [
    # URLs for projects
    path('projects/', views.ProjectListView.as_view(), name='project-list'),
    path('projects/<int:pk>/', views.ProjectDetailView.as_view(), name='project-detail'),
    path('projects/<int:pk>/images/', views.ProjectImagesView.as_view(), name='project-images'),
    # URLs for images
    path('images/', views.ImageListView.as_view(), name='image-list'),
    path('images/<int:pk>/', views.ImageDetailView.as_view(), name='image-detail'),
    # re_path(r'^images/$', views.ProjectImagesView.as_view(), name='project-images'),
    # URLs for tags
    path('tags/', views.TagListView.as_view(), name='tag-list'),
    path('tags/<int:pk>/', views.TagDetailView.as_view(), name='tag-detail'),
]