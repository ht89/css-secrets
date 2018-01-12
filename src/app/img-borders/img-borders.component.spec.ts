import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgBordersComponent } from './img-borders.component';

describe('ImgBordersComponent', () => {
  let component: ImgBordersComponent;
  let fixture: ComponentFixture<ImgBordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgBordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgBordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
