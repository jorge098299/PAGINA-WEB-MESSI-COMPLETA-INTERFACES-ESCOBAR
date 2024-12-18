import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-messi',
  templateUrl: './formulario-messi.component.html',
  styleUrls: ['./formulario-messi.component.scss']
})
export class FormularioMessiComponent implements OnInit {
  profileForm!: FormGroup;  // Declaración de profileForm
  genderOptions: any[] = []; // Declaramos la variable genderOptions

  constructor(private fb: FormBuilder) { }  // Inyección de FormBuilder

  ngOnInit(): void {
    // Inicializamos genderOptions con las opciones de género
    this.genderOptions = [
      { label: 'Masculino', value: 'masculino' },
      { label: 'Femenino', value: 'femenino' },
      { label: 'Otro', value: 'otro' }
    ];

    // Definición del formulario
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', Validators.required],
      direccion: ['', Validators.required],
      gender: ['', Validators.required],
      message: ['', Validators.required],
      agree: [false, Validators.requiredTrue], // Aseguramos que agree esté marcado para que sea válido
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Formulario enviado:', this.profileForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
