"""
WSGI config for aaron_energy_services project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

# settings_module = 'aaron_energy_services.deployment' if 'WEBSITE_HOSTNAME' in os.environ else 'aaron_energy_services.settings'

settings_module = 'aaron_energy_services.deployment'
os.environ.setdefault("DJANGO_SETTINGS_MODULE", 'aaron_energy_services.settings')

application = get_wsgi_application()
