import { TestBed } from '@angular/core/testing';

import { ProjetoserviceService } from './projetoservice.service';

describe('ProjetoserviceService', () => {
  let service: ProjetoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
