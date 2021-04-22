import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeexamplesComponent } from './codeexamples.component';

describe('CodeexamplesComponent', () => {
  let component: CodeexamplesComponent;
  let fixture: ComponentFixture<CodeexamplesComponent>;

  beforeEach(async(() => {
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
