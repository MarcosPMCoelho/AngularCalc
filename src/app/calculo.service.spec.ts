import { TestBed } from '@angular/core/testing';

import { CalculoService } from './service/calculo.service';

describe('CalculoService', () => {
  let service: CalculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
