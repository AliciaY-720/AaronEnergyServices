import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE',
'aaron_energy_services.settings')
app = Celery('aaron_energy_services')
# app.conf.beat_scheduler = 'django_celery_beat.schedulers:DatabaseScheduler'
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()