import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { CarreraMessiComponent } from './carrera-messi/carrera-messi.component';
import { MenuModule } from 'primeng/menu';
import { MessiHomeComponent } from './messi-home/messi-home.component';
import { AppRoutingModule } from './app-routing.module';
import { LogrosMessiComponent } from './logros-messi/logros-messi.component';
import { FormularioMessiComponent } from './formulario-messi/formulario-messi.component';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    CarreraMessiComponent,
    MessiHomeComponent,
    LogrosMessiComponent,
    FormularioMessiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    TimelineModule,
    MenuModule,
    DropdownModule
    //PrimeNGModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
