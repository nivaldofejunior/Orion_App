# Generated by Django 3.2.5 on 2021-07-01 18:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('OrionApp', '0002_remove_projetos_projetoparticipantes'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='projetos',
            name='PrjetoDataFim',
        ),
        migrations.RemoveField(
            model_name='projetos',
            name='ProjetoDataInicio',
        ),
        migrations.RemoveField(
            model_name='projetos',
            name='ProjetoRisco',
        ),
        migrations.RemoveField(
            model_name='projetos',
            name='ProjetoValor',
        ),
    ]
