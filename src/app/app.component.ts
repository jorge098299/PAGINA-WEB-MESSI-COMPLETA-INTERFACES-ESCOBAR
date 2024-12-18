import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: any[];

  constructor(private router: Router) {
    this.items = [
        { 
          label: 'INICIO MESSI', 
          icon: 'pi pi-fw pi-home', 
          routerLink: '/messi-home' 
        },
        { 
          label: 'CARRERA DE MESSI', 
          icon: 'pi pi-fw pi-calendar', 
          routerLink: '/carrera-messi' 
        },
        { 
          label: 'LOGROS DESTACADOS DE MESSI', 
          icon: 'pi pi-fw pi-star',
          routerLink: '/logros-messi' 
        },
        { 
          label: 'FORMULARIO DE MESSI', 
          icon: 'pi pi-fw pi-file', 
          routerLink: '/formulario-messi' 
        }
      ];
  }
}
