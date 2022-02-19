import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CodeexamplesComponent } from './codeexamples.component';

describe('CodeexamplesComponent', () => {
  let component: CodeexamplesComponent;
  let fixture: ComponentFixture<CodeexamplesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeexamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeexamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
