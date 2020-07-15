import { TestBed } from '@angular/core/testing';
import { SnakeScore } from './snake-score.service';

describe('SnakeScore', () => {
  let service: SnakeScore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnakeScore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
