# Generated by Django 2.1.3 on 2019-03-10 13:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registers',
            name='date',
            field=models.DateField(auto_now_add=True, null=True),
        ),
    ]