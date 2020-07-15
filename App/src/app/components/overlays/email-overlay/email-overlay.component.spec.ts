import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailOverlayComponent } from './email-overlay.component';

describe('EmailOverlayComponent', () => {
  let component: EmailOverlayComponent;
  let fixture: ComponentFixture<EmailOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
