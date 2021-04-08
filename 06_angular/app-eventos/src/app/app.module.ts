import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutes } from './components/rotas/app.routes';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent, 
    MenuComponent,
    HomeComponent,
    CadastroComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
