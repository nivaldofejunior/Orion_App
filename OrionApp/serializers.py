from rest_framework import serializers
from OrionApp.models import Projetos

class ProjetoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projetos
        fields = ('ProjetoId',
                   'ProjetoNome',
                   'ProjetoDataInicial',
                   'ProjetoDataFinal',
                   'ProjetoValor',
                   'ProjetoRisco',
                   'ProjetoParticipantes',
                   )
