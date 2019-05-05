import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { PedidoDetalheComponent } from './pedido-detalhe/pedido-detalhe.component';
import { PedidoRealizarComponent } from './pedido-realizar/pedido-realizar.component';

const APP_ROUTES: Routes = [
  { path: '', component: PedidoRealizarComponent },
  { path: 'pedido-realizar', component: PedidoRealizarComponent },
  { path: 'pedido-detalhe', component: PedidoDetalheComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
