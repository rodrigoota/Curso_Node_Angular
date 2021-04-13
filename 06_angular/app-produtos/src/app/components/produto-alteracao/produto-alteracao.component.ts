import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/classes/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produto-alteracao',
  templateUrl: './produto-alteracao.component.html',
  styleUrls: ['./produto-alteracao.component.css']
})
export class ProdutoAlteracaoComponent implements OnInit {

  constructor(
    private service: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public produto: Produto;

  ngOnInit(): void {

    this.produto = {
      codigo: 0,
      descricao: '',
      unidade: '',
      preco: 0,
      categoria: ''
    }
    

    //ActivitatedRoute: fornece informações sobre a rota (parametros de entrada)
    const id = this.route.snapshot.paramMap.get('id');

    //buscando o produto com o id informado na rota
    this.service.getProdutoWSId(id)
      .subscribe(res => this.produto = res);
  }

  alterar(produto: Produto) : void {
    this.service.putProdutoWS(produto).subscribe(() => {
      window.alert('Produto alterado com sucesso.');
      this.router.navigate(['/produtos']);
    });
  }

  cancelar(): void {
    this.router.navigate(["/produtos"]);
  }

}
