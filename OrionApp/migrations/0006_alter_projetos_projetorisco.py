# Generated by Django 3.2.5 on 2021-07-02 15:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('OrionApp', '0005_alter_projetos_projetorisco'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projetos',
            name='ProjetoRisco',
            field=models.CharField(max_length=5),
        ),
    ]