import { Component, OnInit, Input } from '@angular/core';
import { ProjetoserviceService } from 'src/app/projetoservice.service';

@Component({
  selector: 'app-show-projeto',
  templateUrl: './show-projeto.component.html',
  styleUrls: ['./show-projeto.component.css']
})
export class ShowProjetoComponent implements OnInit {

  constructor(
    private service: ProjetoserviceService
  ) { }

  listaProjetos: any= [];
  ModalTitle:string = '';
  ActivateAddEditProjComp:boolean=false;
  @Input() projeto:any;
  

  ngOnInit(): void {
    this.atualizaListaProjetos();
  }

  adicionarProjetos(){
    this.projeto={
      ProjetoId: 0,
      ProjetoNome: "",
      ProjetoDataInicial: '',
      ProjetoDataFinal: '',
      ProjetoValor: '',
      ProjetoRisco: '',
      ProjetoParticipantes: '',
    }
    this.ModalTitle = "Adicionar Projetos";
    this.ActivateAddEditProjComp=true;
  }

  fecharAdicionarProjetos(){
    this.ActivateAddEditProjComp=false;
    this.atualizaListaProjetos();
    window.location.reload()
  }

  atualizaListaProjetos(){
    this.service.getListaProjeto().subscribe(data=>{
      this.listaProjetos=data
    })
  }

  editarProjetos(projeto:any){
    this.projeto=projeto;
    this.ModalTitle="Editar Projeto";
    this.ActivateAddEditProjComp=true;

  }

  deletarProjetos(projeto:any){
    if(confirm("Você tem certeza?")){
      this.service.deleteProjeto(projeto.ProjetoId).subscribe(data=>{
        alert(data.toString());
      })

    }
  }

}
