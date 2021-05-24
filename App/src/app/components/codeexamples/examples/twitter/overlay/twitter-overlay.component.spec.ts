import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TwitterOverlayComponent } from './twitter-overlay.component';

describe('TwitterOverlayComponent', () => {
  let component: TwitterOverlayComponent;
  let fixture: ComponentFixture<TwitterOverlayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
