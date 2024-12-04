import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenteventComponent } from './parentevent.component';

describe('ParenteventComponent', () => {
  let component: ParenteventComponent;
  let fixture: ComponentFixture<ParenteventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParenteventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParenteventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
