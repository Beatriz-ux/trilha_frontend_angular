import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaHistoricoComponent } from './tabela-historico.component';

describe('TabelaHistoricoComponent', () => {
  let component: TabelaHistoricoComponent;
  let fixture: ComponentFixture<TabelaHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabelaHistoricoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelaHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
