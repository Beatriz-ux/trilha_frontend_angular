import { TestBed } from '@angular/core/testing';

import { ListaPaisesService } from './lista-paises.service';

describe('ListaPaisesService', () => {
  let service: ListaPaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
