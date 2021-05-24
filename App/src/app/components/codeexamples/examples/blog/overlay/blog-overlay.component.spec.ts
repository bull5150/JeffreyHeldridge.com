import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogOverlayComponent } from './blog-overlay.component';

describe('BlogOverlayComponent', () => {
  let component: BlogOverlayComponent;
  let fixture: ComponentFixture<BlogOverlayComponent>;

  beforeEach(waitForAsync(() => {
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
