import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SnakeComponent } from './snake.component';

describe('SnakeComponent', () => {
  let component: SnakeComponent;
  let fixture: ComponentFixture<SnakeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
