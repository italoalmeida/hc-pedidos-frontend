import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CardapioService } from './cardapio.service';
import { PedidoService } from './pedido.service';
import { routing } from './app.routing';
import { PedidoRealizarComponent } from './pedido-realizar/pedido-realizar.component';
import { PedidoDetalheComponent } from './pedido-detalhe/pedido-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidoRealizarComponent,
    PedidoDetalheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [
    CardapioService,
    PedidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
