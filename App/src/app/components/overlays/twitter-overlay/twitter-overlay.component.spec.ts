import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterOverlayComponent } from './twitter-overlay.component';

describe('TwitterOverlayComponent', () => {
  let component: TwitterOverlayComponent;
  let fixture: ComponentFixture<TwitterOverlayComponent>;

  beforeEach(async(() => {
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
