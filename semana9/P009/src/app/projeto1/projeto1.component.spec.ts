import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projeto1Component } from './projeto1.component';

describe('Projeto1Component', () => {
  let component: Projeto1Component;
  let fixture: ComponentFixture<Projeto1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Projeto1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Projeto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
