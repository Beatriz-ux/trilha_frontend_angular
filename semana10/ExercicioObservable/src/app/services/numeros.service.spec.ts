import { TestBed } from '@angular/core/testing';

import { NumerosService } from './numeros.service';
import { Observable } from 'rxjs';

describe('NumerosService', () => {
  let service: NumerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  //retorne um obsevable que gere numeros de 1 a 100
  

  
});

