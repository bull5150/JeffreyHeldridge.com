import { TestBed } from '@angular/core/testing';

import { PolygonIOService } from './polygon-io.service';

describe('PolygonIOService', () => {
  let service: PolygonIOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolygonIOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
