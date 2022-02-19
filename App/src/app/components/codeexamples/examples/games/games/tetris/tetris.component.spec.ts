import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TetrisComponent } from './tetris.component';

describe('TetrisComponent', () => {
  let component: TetrisComponent;
  let fixture: ComponentFixture<TetrisComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TetrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
