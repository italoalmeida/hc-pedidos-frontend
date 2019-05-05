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
    this.pedidoService.pedir(this.pratosSelecionados)
      .subscribe(
        // Sucesso
        dados => this.mensagem = `O código do seu pedido é: ${dados}`,
        // Erro
        error => this.mensagem = error.error.mensagem
      );
    // Recarrega as opções do cardápio com seleções zeradas
    this.apresentarCardapio();
  }

  apresentarCardapio() {
    this.cardapioService.consultar()
      .subscribe(pratos => {
        // Cria novo atributo para controlar a opção checked do checkbox
        pratos.map(prato => prato['checked'] = false);
        this.pratosOfertados = pratos;
      });
  }

  selecionarPrato() {
    // Retorna apenas os pratos selecionados no pedido
    this.pratosSelecionados = this.pratosOfertados
    .filter(prato => prato.checked);
    // Zera o preço para recalculo
    this.precoTotal = 0;
    // Calcula o preço total dos pratos selecionados
    this.pratosSelecionados
      .forEach(prato => this.precoTotal += parseFloat(prato.preco));
  }

}
