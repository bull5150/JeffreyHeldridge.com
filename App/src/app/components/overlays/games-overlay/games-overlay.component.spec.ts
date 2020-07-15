import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesOverlayComponent } from './games-overlay.component';

describe('GamesOverlayComponent', () => {
  let component: GamesOverlayComponent;
  let fixture: ComponentFixture<GamesOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
