import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { RegistrarFormularioComponent } from './formularios/registrar-formulario/registrar-formulario.component';
import { ConsultasFormularioComponent } from './formularios/consultas-formulario/consultas-formulario.component';
import { ConsultasGeneralesFormularioComponent } from './formularios/consultas-generales-formulario/consultas-generales-formulario.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormularioPersonaComponent } from './Persona/formulario-persona/formulario-persona.component';
import { PersonaEditarFormularioComponent } from './personaEditar/persona-editar-formulario/persona-editar-formulario.component';
import { FiltroFormularioComponent } from './PersonaFiltro/filtro-formulario/filtro-formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    RegistrarFormularioComponent,
    ConsultasFormularioComponent,
    ConsultasGeneralesFormularioComponent,
    FormularioPersonaComponent,
    PersonaEditarFormularioComponent,
    FiltroFormularioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
