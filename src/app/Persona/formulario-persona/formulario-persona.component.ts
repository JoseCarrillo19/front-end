import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { personaDto } from 'src/app/formularios/registrar-formulario/persona';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Output()
  onSubmit: EventEmitter<personaDto> = new EventEmitter<personaDto>();

  enviarFormulario(){
    this.onSubmit.emit(this.form.value);
    
  }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tipoIdentificacion: ['',{ validators: [Validators.required]}],
      identificacion: ['',{ validators: [Validators.required]}],
      nombres: ['',{ validators: [Validators.required]}],
      apellidos: ['',{ validators: [Validators.required]}],
      fechaNacimiento:['',{ validators: [Validators.required]}],
      edad:['',{ validators: [Validators.required]}],
      sexo:['',{ validators: [Validators.required]}],
      estadoCivil:['',{ validators: [Validators.required]}],
      escolaridad:['',{ validators: [Validators.required]}],
      cominidadIndigena:['',{ validators: [Validators.required]}],
      tipoPoblacion:['',{ validators: [Validators.required]}],
      parentesco:['',{ validators: [Validators.required]}],
      profesion:['',{ validators: [Validators.required]}],
      integrantes:['',{ validators: [Validators.required]}],
      telefono:['',{ validators: [Validators.required]}],
      nombreCompleto:['',{ validators: [Validators.required]}],
      codigoFamilia:['',{ validators: [Validators.required]}],
      integrantesFamilia:['',{ validators: [Validators.required]}],
      vigencia:['',{ validators: [Validators.required]}],
      observaciones:['',{ validators: [Validators.required]}]
    });
  }



  ObtenerErrorCampoNombre(){
    var identificacion = this.form.get('identificacion');
    if(identificacion.hasError('required')){
      return 'El campo es requerido';
    }else{
      return '';
    }    
  }

}
