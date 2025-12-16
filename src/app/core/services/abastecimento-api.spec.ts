import { TestBed } from '@angular/core/testing';

import { AbastecimentoApi } from './abastecimento-api';

describe('AbastecimentoApi', () => {
  let service: AbastecimentoApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbastecimentoApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
