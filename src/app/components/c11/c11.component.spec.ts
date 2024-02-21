import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C11Component } from './c11.component';

describe('C11Component', () => {
  let component: C11Component;
  let fixture: ComponentFixture<C11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
