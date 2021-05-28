import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularformsOverlayComponent } from './angularforms-overlay.component';

describe('AngularformsOverlayComponent', () => {
  let component: AngularformsOverlayComponent;
  let fixture: ComponentFixture<AngularformsOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularformsOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularformsOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
