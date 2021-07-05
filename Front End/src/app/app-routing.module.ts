import { InvestimentosComponent } from './investimentos/investimentos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjetosComponent } from './projetos/projetos.component'

const routes: Routes = [
  {
    path:'projeto', component:ProjetosComponent
  },
  {
    path:'investimentos', component:InvestimentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
