import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C07Component } from './c07.component';

describe('C07Component', () => {
  let component: C07Component;
  let fixture: ComponentFixture<C07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C07Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
