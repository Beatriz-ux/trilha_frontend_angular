import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardControleComponent } from './dashboard-controle.component';

describe('DashboardControleComponent', () => {
  let component: DashboardControleComponent;
  let fixture: ComponentFixture<DashboardControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardControleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
