
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { personaDto } from './persona';

@Component({
  selector: 'app-registrar-formulario',
  templateUrl: './registrar-formulario.component.html',
  styleUrls: ['./registrar-formulario.component.css']
})
export class RegistrarFormularioComponent{


  constructor(private router: Router) { }

  enviarFormulario(persona: personaDto){
    this.router.navigate(['/home']);
    console.log(persona);
  }
}
