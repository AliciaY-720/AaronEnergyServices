from .settings import *
from .settings import BASE_DIR
import os


STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
default_website_hostname = 'aaronenergyservicesbackend.azurewebsites.net' # Provide your default hostname here
website_hostname = os.environ.get('WEBSITE_HOSTNAME', default_website_hostname)
ALLOWED_HOSTS = [website_hostname]
CSRF_TRUSTED_ORIGINS = ['https://' + website_hostname]
DEBUG = False

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhitenoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

CORS_ORIGIN_WHITELIST = [
    'http://localhost:4200',
]

STORAGES = {
    "default": {
        "BACKEND": "django.core.files.storage.FileSystemStorage",
    },
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}

CONNECTION = os.environ.get('AZURE_POSTGRESQL_CONNECTIONSTRING')
CONNECTION_STR = {pair.split('=')[0]:pair.split('=')[1] for pair in CONNECTION.split(' ')}

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': CONNECTION_STR['dbname'],
        'HOST': CONNECTION_STR['host'],
        'USER': CONNECTION_STR['user'],
        'PASSWORD': CONNECTION_STR['password'],

    }
}



LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'level': 'ERROR',  # Change this to the appropriate level for production
            'class': 'logging.StreamHandler',
        },
        # You can add more handlers if needed, such as file handlers or email handlers
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
            'level': 'ERROR',  # Change this to the appropriate level for production
            'propagate': True,
        },
    },
}