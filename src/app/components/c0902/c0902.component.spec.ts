import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C0902Component } from './c0902.component';

describe('C0902Component', () => {
  let component: C0902Component;
  let fixture: ComponentFixture<C0902Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C0902Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C0902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
