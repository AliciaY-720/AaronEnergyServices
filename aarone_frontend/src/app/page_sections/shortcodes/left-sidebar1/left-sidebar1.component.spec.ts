import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebar1Component } from './left-sidebar1.component';

describe('LeftSidebar1Component', () => {
  let component: LeftSidebar1Component;
  let fixture: ComponentFixture<LeftSidebar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSidebar1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSidebar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
