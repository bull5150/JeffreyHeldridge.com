import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PolygonOverlayComponent } from './polygon-overlay.component';

describe('PolygonOverlayComponent', () => {
  let component: PolygonOverlayComponent;
  let fixture: ComponentFixture<PolygonOverlayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
