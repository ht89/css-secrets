import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrostedGlassComponent } from './frosted-glass.component';

describe('FrostedGlassComponent', () => {
  let component: FrostedGlassComponent;
  let fixture: ComponentFixture<FrostedGlassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrostedGlassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrostedGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
