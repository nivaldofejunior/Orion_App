from django.db import models
from datetime import datetime, date

# Create your models here.

class Projetos(models.Model):
    ProjetoId = models.AutoField(primary_key=True)
    ProjetoNome= models.CharField(max_length=50)
    ProjetoDataInicial = models.DateField()
    ProjetoDataFinal = models.DateField()
    ProjetoValor = models.FloatField()
    ProjetoRisco = models.CharField(max_length=5)
    ProjetoParticipantes = models.CharField(max_length=50)