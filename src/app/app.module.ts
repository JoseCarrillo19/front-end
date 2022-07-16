import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { RegistrarFormularioComponent } from './formularios/registrar-formulario/registrar-formulario.component';
import { ConsultasFormularioComponent } from './formularios/consultas-formulario/consultas-formulario.component';
import { ConsultasGeneralesFormularioComponent } from './formularios/consultas-generales-formulario/consultas-generales-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    RegistrarFormularioComponent,
    ConsultasFormularioComponent,
    ConsultasGeneralesFormularioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
