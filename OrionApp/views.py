from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from OrionApp.models import Projetos
from OrionApp.serializers import ProjetoSerializer

# Create your views here.
@csrf_exempt
def ProjetoApi(request, id=0):
    if request.method=='GET':
        projetos = Projetos.objects.all()
        projetos_serializer = ProjetoSerializer(projetos, many=True)
        return JsonResponse(projetos_serializer.data, safe=False)

    elif request.method=='POST':
        projeto_data=JSONParser().parse(request)
        projeto_serializer = ProjetoSerializer(data=projeto_data)
        if projeto_serializer.is_valid():
            projeto_serializer.save()
            return JsonResponse("Salvo com sucesso", safe=False)
        return JsonResponse("Falha ao adicionar", safe=False)

    elif request.method=='PUT':
        projeto_data = JSONParser().parse(request)
        projeto = Projetos.objects.get(ProjetoId=projeto_data['ProjetoId'])
        projeto_serializer = ProjetoSerializer(projeto,data=projeto_data)
        if projeto_serializer.is_valid():
            projeto_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)


    elif request.method=='DELETE':
        projeto = Projetos.objects.get(ProjetoId = id)
        projeto.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)