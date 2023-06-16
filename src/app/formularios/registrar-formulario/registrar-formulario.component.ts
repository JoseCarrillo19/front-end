
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { personaDto } from './persona';
import { PersonaService } from 'src/app/Persona/persona.service';

@Component({
  selector: 'app-registrar-formulario',
  templateUrl: './registrar-formulario.component.html',
  styleUrls: ['./registrar-formulario.component.css']
})
export class RegistrarFormularioComponent{


  constructor(private router: Router, private personaService: PersonaService) { }

  enviarFormulario(persona: personaDto){
    this.personaService.crear(persona).subscribe(()=>{
      this.router.navigate(['/home']);
    }, error => console.error(error));
    console.log(persona);
  }
}
