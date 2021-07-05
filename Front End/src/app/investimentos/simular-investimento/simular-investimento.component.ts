import { summaryFileName } from '@angular/compiler/src/aot/util';
import { Component, Input, OnInit } from '@angular/core';
import { ProjetoserviceService } from 'src/app/projetoservice.service';

@Component({
  selector: 'app-simular-investimento',
  templateUrl: './simular-investimento.component.html',
  styleUrls: ['./simular-investimento.component.css']
})
export class SimularInvestimentoComponent implements OnInit {

  constructor(private service: ProjetoserviceService) { }
  @Input() projeto:any;

  ProjetoId: string = '';
  ProjetoNome: string = '';
  ProjetoValor: number = 0;
  ProjetoRisco: string = '';

  listaProjetos: any= [];

  ValorInvestido:number = 0;
  valorfinal:number = 0;
  valorAtual:number = 0;

  Valor:any = []
  Risco: any= []

  ngOnInit(): void {
    this.atualizaListaProjetos();

  }

  investir(){
    var val={
      ProjetoId:this.projeto.ProjetoId,
      ProjetoValor:this.valorfinal
    }
    console.log(val)

    this.service.updateProjeto(val).subscribe(res=>{
      console.log(res)
      alert(res.toString());
    })

}

  atualizaListaProjetos(){
    this.service.getListaProjeto().subscribe(data=>{
      this.listaProjetos=data
    })
  }

  simularValor(projeto:any){
    this.Valor = this.projeto.ProjetoValor
    this.Risco = this.projeto.ProjetoRisco
    
    this.valorfinal = this.projeto.ProjetoValor + this.ValorInvestido
    console.log("Valor da Simulação", this.valorfinal)

    if (this.ValorInvestido < this.projeto.ProjetoValor){
       
    }
  }
}
