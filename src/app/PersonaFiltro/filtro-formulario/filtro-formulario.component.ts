import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-formulario',
  templateUrl: './filtro-formulario.component.html',
  styleUrls: ['./filtro-formulario.component.css']
})
export class FiltroFormularioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      identificacion:''
    })
  }

}
