import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOverlayComponent } from './blog-overlay.component';

describe('BlogOverlayComponent', () => {
  let component: BlogOverlayComponent;
  let fixture: ComponentFixture<BlogOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
