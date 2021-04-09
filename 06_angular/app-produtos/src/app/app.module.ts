import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';
import { ProdutoNovoComponent } from './components/produto-novo/produto-novo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProdutoComponent,
    ProdutoListaComponent,
    ProdutoNovoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
