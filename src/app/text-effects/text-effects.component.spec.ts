import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEffectsComponent } from './text-effects.component';

describe('TextEffectsComponent', () => {
  let component: TextEffectsComponent;
  let fixture: ComponentFixture<TextEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
