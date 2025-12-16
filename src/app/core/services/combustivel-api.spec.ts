import { TestBed } from '@angular/core/testing';

import { CombustivelApi } from './combustivel-api';

describe('CombustivelApi', () => {
  let service: CombustivelApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombustivelApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
