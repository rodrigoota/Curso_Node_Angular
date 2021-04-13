import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../classes/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3200/api/produtos";

  //retorna todos os produtos
  public getListaProdutosWS(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }

  //retorna um produto pelo seu id
  public getProdutoWSId(id: string): Observable<Produto> {
    const url_id = `${this.url}/${id}`;
    return this.http.get<Produto>(url_id);
  }

  //incluir um novo produto
  public postProdutoWS(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto);
  }
  
  //alterar um produto pelo id
  public putProdutoWS(produto: Produto): Observable<Produto> {
    const url_id = `${this.url}/${produto._id}`;
    return this.http.put<Produto>(url_id, produto);
  }
  
  //remover um produto pelo id
  public deletarProdutoWS(id: string): Observable<Produto> {
    const url_id = `${this.url}/${id}`;
    return this.http.delete<Produto>(url_id);
  }

}
