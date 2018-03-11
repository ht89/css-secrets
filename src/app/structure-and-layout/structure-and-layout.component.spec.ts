import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureAndLayoutComponent } from './structure-and-layout.component';

describe('StructureAndLayoutComponent', () => {
  let component: StructureAndLayoutComponent;
  let fixture: ComponentFixture<StructureAndLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureAndLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureAndLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
