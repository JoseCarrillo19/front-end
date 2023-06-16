import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { personaDto } from '../formularios/registrar-formulario/persona';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'persona';
  private apiURL2 = environment.apiURL + 'persona/registro';
  public obtenerTodo(): Observable<personaDto[]>{
    return this.http.get<personaDto[]>(this.apiURL);
  }
  public crear(persona: personaDto){
    return this.http.post(this.apiURL2, persona);
  }
}
