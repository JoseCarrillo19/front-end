import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasGeneralesFormularioComponent } from './consultas-generales-formulario.component';

describe('ConsultasGeneralesFormularioComponent', () => {
  let component: ConsultasGeneralesFormularioComponent;
  let fixture: ComponentFixture<ConsultasGeneralesFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasGeneralesFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultasGeneralesFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
