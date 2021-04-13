import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';
import { ProdutoNovoComponent } from './components/produto-novo/produto-novo.component';
import { FormsModule } from '@angular/forms';
import { ProdutoAlteracaoComponent } from './components/produto-alteracao/produto-alteracao.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProdutoComponent,
    ProdutoListaComponent,
    ProdutoNovoComponent,
    ProdutoAlteracaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
