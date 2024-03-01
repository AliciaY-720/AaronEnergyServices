from django.urls import path
from . import views

urlpatterns = [
    path('contacts/', views.ContactsCreateView.as_view(), name='contacts-create'),
    path('contacts/<int:pk>', views.ContactRetrieveUpdateDeleteView.as_view(), name='contacts-retrieve-update-delete'),
]