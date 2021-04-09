import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutes } from './components/rotas/app.routes';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { EventosService } from './services/eventos.service';
import { FormsModule } from '@angular/forms';
import { SubLista } from './filters/sublista.filter';

@NgModule({
  declarations: [
    AppComponent, 
    MenuComponent,
    HomeComponent,
    CadastroComponent,
    NotFoundComponent,
    SubLista
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [EventosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
