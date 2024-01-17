import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C06Component } from './c06.component';

describe('C06Component', () => {
  let component: C06Component;
  let fixture: ComponentFixture<C06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C06Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
