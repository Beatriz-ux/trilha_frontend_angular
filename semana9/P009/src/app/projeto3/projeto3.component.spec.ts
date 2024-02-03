import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projeto3Component } from './projeto3.component';

describe('Projeto3Component', () => {
  let component: Projeto3Component;
  let fixture: ComponentFixture<Projeto3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Projeto3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Projeto3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
