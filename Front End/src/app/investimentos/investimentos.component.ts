import { Component, Input, OnInit } from '@angular/core';
import { ProjetoserviceService } from '../projetoservice.service';

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.css']
})
export class InvestimentosComponent implements OnInit {

  constructor(private service: ProjetoserviceService) { }

  listaProjetos: any= [];
  ModalTitle:string = '';
  ProjetoRisco:number = 0;
 
  SimularProjComp: boolean = false;
  @Input() projeto:any;

  ngOnInit(): void {
    this.atualizaListaProjetos();
  }

  atualizaListaProjetos(){
    this.service.getListaProjeto().subscribe(data=>{
      this.listaProjetos=data
    })
  }

  simularInvestimento(projeto:any){
    
    var valor;
    
    this.projeto=projeto;
    this.ModalTitle="Simular Investimento";
    valor = this.projeto.projeto;
    this.SimularProjComp=true;
    console.log(projeto)

}

fecharModal(){
  this.SimularProjComp=false;
  this.atualizaListaProjetos();
  window.location.reload()
}

}
