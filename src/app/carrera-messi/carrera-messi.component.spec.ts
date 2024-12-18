import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreraMessiComponent } from './carrera-messi.component';

describe('CarreraMessiComponent', () => {
  let component: CarreraMessiComponent;
  let fixture: ComponentFixture<CarreraMessiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarreraMessiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarreraMessiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
