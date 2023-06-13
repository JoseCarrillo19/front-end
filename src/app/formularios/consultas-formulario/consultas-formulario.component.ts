import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consultas-formulario',
  templateUrl: './consultas-formulario.component.html',
  styleUrls: ['./consultas-formulario.component.css']
})
export class ConsultasFormularioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup

  Persona = [
    { identificacion: 1, nombre: 'JOSE'},
    { identificacion: 2, nombre: 'LINA'},
    { identificacion: 3, nombre: 'ANA'},
    { identificacion: 4, nombre: 'CARLOS'},
    { identificacion: 5, nombre: 'CARRILLO'},
    { identificacion: 6, nombre: 'VILLAZON'}
  ]

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      identificacion:''
    })
  }

}
