import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-pedido-detalhe',
  templateUrl: './pedido-detalhe.component.html',
  styleUrls: ['./pedido-detalhe.component.css']
})
export class PedidoDetalheComponent implements OnInit {
  titulo = 'Detalhes do pedido';
  mensagem = String();
  codigoPedido = String();
  pratosPedidos = Array<any>();

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
  }

  onSubmit() {
    // Limpa os campos para receber novos valores recebidos da consulta
    this.pratosPedidos = Array<any>();
    this.mensagem = String();

    // Valida se campo foi submetido vazio
    if (!this.codigoPedido) return false;
    
    this.pedidoService.consultar(this.codigoPedido)
      .subscribe(
        // Sucesso
        pratos =>  this.pratosPedidos = pratos,
        // Erro
        error => this.mensagem = error.error.mensagem
      );
  }

}
