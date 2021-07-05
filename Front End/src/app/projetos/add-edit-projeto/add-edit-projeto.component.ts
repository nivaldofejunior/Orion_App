import { Component, OnInit, Input } from '@angular/core';
import { ProjetoserviceService } from 'src/app/projetoservice.service';

@Component({
  selector: 'app-add-edit-projeto',
  templateUrl: './add-edit-projeto.component.html',
  styleUrls: ['./add-edit-projeto.component.css']
})
export class AddEditProjetoComponent implements OnInit {

  constructor(private service:ProjetoserviceService) { }

  ngOnInit(): void {
    this.ProjetoId=this.projeto.ProjetoId;
    this.ProjetoNome=this.projeto.ProjetoNome;
  }

  @Input() projeto:any;
  ProjetoId: string = '';
  ProjetoNome: string = '';
  ProjetoParticipantes: string = '';
  ProjetoValor: number = 0;
  ProjetoDataInicial = new Date();
  ProjetoDataFinal = new Date();
  ProjetoRisco: string = '';

  addProjeto(){
    var val={
      ProjetoId:this.ProjetoId,
      ProjetoNome:this.ProjetoNome,
      ProjetoDataInicial: this.ProjetoDataInicial,
      ProjetoDataFinal: this.ProjetoDataFinal,
      ProjetoRisco: this.ProjetoRisco,
      ProjetoParticipantes: this.ProjetoParticipantes,
      ProjetoValor: this.ProjetoValor,


    }
    this.service.addProjeto(val).subscribe(res=>{
      console.log(val)
      alert(res.toString());
    })
  }

  updateProjeto(){
    var val={
      ProjetoId:this.ProjetoId,
      ProjetoNome:this.ProjetoNome
    }
    this.service.updateProjeto(val).subscribe(res=>{
      alert(res.toString());
    })

  }

}
