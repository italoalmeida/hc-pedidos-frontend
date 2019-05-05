import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoRealizarComponent } from './pedido-realizar.component';

describe('PedidoRealizarComponent', () => {
  let component: PedidoRealizarComponent;
  let fixture: ComponentFixture<PedidoRealizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoRealizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoRealizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
