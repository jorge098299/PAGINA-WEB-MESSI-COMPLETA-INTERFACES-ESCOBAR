import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMessiComponent } from './formulario-messi.component';

describe('FormularioMessiComponent', () => {
  let component: FormularioMessiComponent;
  let fixture: ComponentFixture<FormularioMessiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioMessiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioMessiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
