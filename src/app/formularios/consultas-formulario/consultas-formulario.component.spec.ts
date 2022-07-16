import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasFormularioComponent } from './consultas-formulario.component';

describe('ConsultasFormularioComponent', () => {
  let component: ConsultasFormularioComponent;
  let fixture: ComponentFixture<ConsultasFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultasFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
