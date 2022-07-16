
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-formulario',
  templateUrl: './registrar-formulario.component.html',
  styleUrls: ['./registrar-formulario.component.css']
})
export class RegistrarFormularioComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tipoIdentificacion: '',
      identificacion: '',
      nombres: '',
      apellidos: ''
    });
  }

  enviarFormulario(){
    this.router.navigate(['/home']);
  }
}
