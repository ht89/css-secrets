import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomBackgroundsComponent } from './random-backgrounds.component';

describe('RandomBackgroundsComponent', () => {
  let component: RandomBackgroundsComponent;
  let fixture: ComponentFixture<RandomBackgroundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomBackgroundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomBackgroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
