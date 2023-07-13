import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexBgPatternsComponent } from './complex-bg-patterns.component';

describe('ComplexBgPatternsComponent', () => {
  let component: ComplexBgPatternsComponent;
  let fixture: ComponentFixture<ComplexBgPatternsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexBgPatternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexBgPatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
