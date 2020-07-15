import { TestBed } from '@angular/core/testing';

import { GooglemarkerapiService } from './googlemarkerapi.service';

describe('GooglemarkerapiService', () => {
  let service: GooglemarkerapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GooglemarkerapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
