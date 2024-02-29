import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAtendimentoComponent } from './forms-atendimento.component';

describe('FormsAtendimentoComponent', () => {
  let component: FormsAtendimentoComponent;
  let fixture: ComponentFixture<FormsAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsAtendimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
