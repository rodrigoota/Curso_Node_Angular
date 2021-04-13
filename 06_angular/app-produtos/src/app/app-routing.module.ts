import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoAlteracaoComponent } from './components/produto-alteracao/produto-alteracao.component';
import { ProdutoNovoComponent } from './components/produto-novo/produto-novo.component';
import { ProdutoComponent } from './components/produto/produto.component';

const routes: Routes = [
  { path: "", component: ProdutoComponent },
  { path: "produtos", component: ProdutoComponent },
  { path: "produtos/novo", component: ProdutoNovoComponent },
  { path: "produtos/alteracao/:id", component: ProdutoAlteracaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
