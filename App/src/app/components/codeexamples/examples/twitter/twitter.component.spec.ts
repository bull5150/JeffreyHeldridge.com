import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TwitterComponent } from './twitter.component';

describe('TwitterComponent', () => {
  let component: TwitterComponent;
  let fixture: ComponentFixture<TwitterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
