import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  cardapioUrl = 'http://localhost:8080/cardapio';

  pedidoUrl = 'http://localhost:8080/pedido';

  constructor(private http: HttpClient) { }

  consultar() {
    return this.http.get<any[]>(this.cardapioUrl);
  }

  pedir(pratosSelecionados) {
    this.http.post(this.pedidoUrl, pratosSelecionados).subscribe();
  }

}
