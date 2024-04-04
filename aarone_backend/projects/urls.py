from django.urls import path
from . import views

urlpatterns = [
    # URLs for projects
    path('projects/', views.ProjectListView.as_view(), name='project-list'),
    path('projects/<int:pk>/', views.ProjectDetailView.as_view(), name='project-detail'),
    path('projects/<int:pk>/images/', views.ProjectImagesView.as_view(), name='project-images'),

    # URLs for services
    path('services/', views.ServiceListView.as_view(), name='service-list'),
    path('services/<int:pk>/', views.ServiceDetailView.as_view(), name='service-detail'),
    path('services/<int:pk>/projects/', views.ServiceProjectsView.as_view(), name='service-projects'),

    # URLs for images
    path('images/', views.ImageListView.as_view(), name='image-list'),
    path('images/<int:pk>/', views.ImageDetailView.as_view(), name='image-detail'),


]