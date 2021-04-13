import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/classes/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.css']
})
export class ProdutoNovoComponent implements OnInit {

  constructor(
    private service: ProdutosService,
    private router: Router
  ) { }

  produto : Produto;

  ngOnInit(): void {
    this.produto = {
      codigo: 0,
      descricao: '',
      unidade: '',
      preco: 0,
      categoria: ''
    }
  }

  incluir(produto: Produto): void {
    this.service.postProdutoWS(produto)
    .subscribe(
      () => {
        window.alert('Produto incluído com sucesso');
        this.router.navigate(['/produtos']);
      }
    );
  }

  cancelar(): void {
    this.router.navigate(["/produtos"]);
  }

}
