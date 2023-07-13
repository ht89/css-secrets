import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripedBackgroundsComponent } from './striped-backgrounds.component';

describe('StripedBackgroundsComponent', () => {
  let component: StripedBackgroundsComponent;
  let fixture: ComponentFixture<StripedBackgroundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripedBackgroundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripedBackgroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
