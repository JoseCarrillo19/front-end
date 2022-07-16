import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarFormularioComponent } from './registrar-formulario.component';

describe('RegistrarFormularioComponent', () => {
  let component: RegistrarFormularioComponent;
  let fixture: ComponentFixture<RegistrarFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
