import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldedCornerComponent } from './folded-corner.component';

describe('FoldedCornerComponent', () => {
  let component: FoldedCornerComponent;
  let fixture: ComponentFixture<FoldedCornerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldedCornerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldedCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
