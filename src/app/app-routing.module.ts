import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasFormularioComponent } from './formularios/consultas-formulario/consultas-formulario.component';
import { ConsultasGeneralesFormularioComponent } from './formularios/consultas-generales-formulario/consultas-generales-formulario.component';
import { RegistrarFormularioComponent } from './formularios/registrar-formulario/registrar-formulario.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'formulario', component: RegistrarFormularioComponent},
  {path: 'formulario/consultas', component: ConsultasFormularioComponent},
  {path: 'formulario/consultas/generales', component: ConsultasGeneralesFormularioComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
