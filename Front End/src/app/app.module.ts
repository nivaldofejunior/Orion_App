import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ShowProjetoComponent } from './projetos/show-projeto/show-projeto.component';
import { AddEditProjetoComponent } from './projetos/add-edit-projeto/add-edit-projeto.component';
import { ProjetoserviceService } from './projetoservice.service';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InvestimentosComponent } from './investimentos/investimentos.component';
import { SimularInvestimentoComponent } from './investimentos/simular-investimento/simular-investimento.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetosComponent,
    ShowProjetoComponent,
    AddEditProjetoComponent,
    InvestimentosComponent,
    SimularInvestimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [ProjetoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
