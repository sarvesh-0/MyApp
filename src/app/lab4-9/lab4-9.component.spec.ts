import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab49Component } from './lab4-9.component';

describe('Lab49Component', () => {
  let component: Lab49Component;
  let fixture: ComponentFixture<Lab49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lab49Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lab49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
