import { Component, OnInit } from '@angular/core';
import { CardapioService } from '../cardapio.service';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-pedido-realizar',
  templateUrl: './pedido-realizar.component.html',
  styleUrls: ['./pedido-realizar.component.css']
})
export class PedidoRealizarComponent implements OnInit {
  titulo = 'Faça seu pedido';
  mensagem = String();
  pratosOfertados = Array<any>();
  pratosSelecionados = Array<any>();
  precoTotal = Number();

  constructor(
    private cardapioService: CardapioService,
    private pedidoService: PedidoService
  ) { }

  ngOnInit() {
    this.apresentarCardapio();
  }
  
  onSubmit() {
    // Evita chamadas sem a seleção dos pratos
    if (!this.pratosSelecionados.length) return false;

    // Realiza o pedido
    this.pedidoService.pedir(this.pratosSelecionados)
      .subscribe(
        // Sucesso
        dados => this.mensagem = `Pedido realizado! Seu código para consulta é: ${dados}`,
        // Erro
        error => this.mensagem = error.error.mensagem
      );
      
    // Recarrega as opções do cardápio com seleções zeradas
    this.apresentarCardapio();
  }

  apresentarCardapio() {
    // Limpa todos os campos para esperar um novo pedido
    this.mensagem = String();
    this.pratosOfertados = Array<any>();
    this.pratosSelecionados = Array<any>();
    this.precoTotal = Number();

    // Consulta o cardápio para exibição
    this.cardapioService.consultar()
      .subscribe(
        pratos => {
          // Cria novo atributo para controlar a opção checked do checkbox
          pratos.map(prato => prato['checked'] = false);
          this.pratosOfertados = pratos;
        },
        error => this.mensagem = error.error.mensagem
      );
  }

  selecionarPrato() {
    // Zera o preço para recalculo
    this.precoTotal = 0;
    // Calcula o preço total dos pratos selecionados
    this.pratosSelecionados.forEach(prato => this.precoTotal += parseFloat(prato.preco));
  }

}
