import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraMessiComponent } from './carrera-messi/carrera-messi.component';  
import { MessiHomeComponent } from './messi-home/messi-home.component';
import { LogrosMessiComponent } from './logros-messi/logros-messi.component';
import { FormularioMessiComponent } from './formulario-messi/formulario-messi.component';


const routes: Routes = [
  {path: 'messi-home', component:MessiHomeComponent},
  { path: '', redirectTo: '/messi-home', pathMatch: 'full' }, 

  {path: 'carrera-messi', component:CarreraMessiComponent},
  {path: 'logros-messi', component:LogrosMessiComponent},
  {path: 'formulario-messi', component:FormularioMessiComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
