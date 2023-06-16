import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Persona/persona.service';

@Component({
  selector: 'app-consultas-generales-formulario',
  templateUrl: './consultas-generales-formulario.component.html',
  styleUrls: ['./consultas-generales-formulario.component.css']
})
export class ConsultasGeneralesFormularioComponent implements OnInit {

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.obtenerTodo()
    .subscribe(persona => {
      console.log(persona);
    }, error => console.error(error));
  }

}
