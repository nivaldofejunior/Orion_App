# Generated by Django 3.2.5 on 2021-07-01 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Projetos',
            fields=[
                ('ProjetoId', models.AutoField(primary_key=True, serialize=False)),
                ('ProjetoNome', models.CharField(max_length=50)),
                ('ProjetoDataInicio', models.DateField()),
                ('PrjetoDataFim', models.DateField()),
                ('ProjetoValor', models.FloatField()),
                ('ProjetoRisco', models.IntegerField()),
                ('ProjetoParticipantes', models.CharField(max_length=50)),
            ],
        ),
    ]
