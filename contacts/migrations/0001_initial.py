# Generated by Django 5.0.2 on 2024-02-29 22:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Contact",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("fullname", models.CharField(max_length=100)),
                ("email", models.CharField(max_length=50)),
                ("phone", models.CharField(max_length=20)),
                (
                    "query",
                    models.TextField(
                        blank=True, help_text="Enter your query", max_length=2000
                    ),
                ),
            ],
        ),
    ]
