import { TestBed } from '@angular/core/testing';

import { ListaNewsService } from './lista-news.service';

describe('ListaNewsService', () => {
  let service: ListaNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
