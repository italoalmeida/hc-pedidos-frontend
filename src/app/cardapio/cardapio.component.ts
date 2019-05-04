import { Component, OnInit } from '@angular/core';
import { CardapioService } from '../cardapio.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {
  titulo = 'Cardápio';

  pratosOfertados = Array<any>();

  pratosSelecionados = Array<any>();

  constructor(private cardapioService: CardapioService) { }

  ngOnInit() {
    this.apresentarCardapio();
  }

  apresentarCardapio() {
    this.cardapioService.consultar()
      .subscribe(dados => {
        dados.map(dado => dado['checked'] = false);
        this.pratosOfertados = dados;
      });
  }

  selecionarPrato() {
    this.pratosSelecionados = this.pratosOfertados
      .filter(prato => prato.checked);
  }

  onSubmit() {
    this.cardapioService.pedir(this.pratosSelecionados);
    this.apresentarCardapio();
  }

}
