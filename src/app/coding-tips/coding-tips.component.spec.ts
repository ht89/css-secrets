import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingTipsComponent } from './coding-tips.component';

describe('CodingTipsComponent', () => {
  let component: CodingTipsComponent;
  let fixture: ComponentFixture<CodingTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
