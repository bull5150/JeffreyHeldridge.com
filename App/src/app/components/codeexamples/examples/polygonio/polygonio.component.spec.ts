import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PolygonioComponent } from './polygonio.component';

describe('PolygonioComponent', () => {
  let component: PolygonioComponent;
  let fixture: ComponentFixture<PolygonioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
