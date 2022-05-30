import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { config } from '../data/config/Config';
import { Persona } from '../data/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  obtenerDatosPersona(): Observable<Persona[]> {
    return this.http.get<any>(config.baseUrl + "persona/read")
  }

  guardarNuevaPersona(persona: Persona): Observable<Persona> {
    return this.http.post<any>(config.baseUrl + "persona/create", persona);
  }

  modificarPersona(persona: Persona): Observable<any> {
    return this.http.put<any>(config.baseUrl + "persona/update", persona);
  }

  borrarPersona(id: number): Observable<any> {
    return this.http.delete<any>(config.baseUrl + "persona/delete/" + id);
  }

}
