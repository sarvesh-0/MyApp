import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab46Component } from './lab4-6.component';

describe('Lab46Component', () => {
  let component: Lab46Component;
  let fixture: ComponentFixture<Lab46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lab46Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lab46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
