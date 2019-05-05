import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidoUrl = 'http://localhost:8080/pedido';

  constructor(private http: HttpClient) { }

  consultar(codigoPedido: string) {
    return this.http.get<any[]>(`${this.pedidoUrl}/${codigoPedido}`);
  }

  pedir(pratosSelecionados: Array<any>) {
    return this.http.post(this.pedidoUrl, pratosSelecionados);
  }

}
