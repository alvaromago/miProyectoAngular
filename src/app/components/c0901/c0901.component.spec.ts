import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C0901Component } from './c0901.component';

describe('C0901Component', () => {
  let component: C0901Component;
  let fixture: ComponentFixture<C0901Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C0901Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C0901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
