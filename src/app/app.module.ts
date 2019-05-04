import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CardapioService } from './cardapio.service';

@NgModule({
  declarations: [
    AppComponent,
    CardapioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ CardapioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
