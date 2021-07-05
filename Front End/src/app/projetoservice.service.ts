import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetoserviceService {

  readonly APIUrl = "http://127.0.0.1:8000/"

  constructor(
    private http: HttpClient,
  ) { }

  //Chama a lista com projetos
  getListaProjeto():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'projeto/');
  }

  //Adiciona a lista com projetos
  addProjeto(val:any){
    return this.http.post(this.APIUrl + 'projeto/', val);
  }

  //Edita a lista com projetos

  updateProjeto(val:any){
    return this.http.put(this.APIUrl + 'projeto/', val);
  }

  //Excluir item

  deleteProjeto(val:any){
    return this.http.delete(this.APIUrl + 'projeto/'+ val);
  }


  getAllProjectsNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+ 'projeto/');
  }
}
