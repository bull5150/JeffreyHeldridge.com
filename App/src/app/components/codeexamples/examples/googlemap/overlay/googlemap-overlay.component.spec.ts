import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GooglemapOverlayComponent } from './googlemap-overlay.component';

describe('GooglemapOverlayComponent', () => {
  let component: GooglemapOverlayComponent;
  let fixture: ComponentFixture<GooglemapOverlayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglemapOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglemapOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
