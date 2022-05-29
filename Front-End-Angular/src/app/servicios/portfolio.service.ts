import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { config } from '../data/config/Config'
import { Educacion } from '../data/Educacion';
import { Experiencia } from '../data/Experiencia';
import { Proyecto } from '../data/Proyecto';
import { Tecnologia } from '../data/Tecnologia';
import { AcercaDe } from '../data/AcercaDe';
import { Persona } from '../data/Persona';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any> {
    return this.http.get('./assets/data/data.json');
  }

  // EDUCACION
  obtenerDatosEducacion(): Observable<Educacion[]> {
    return this.http.get<any>(config.baseUrl + "educacion/read")
  }

  guardarNuevaEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.post<any>(config.baseUrl + "educacion/create", educacion);
  }

  modificarEducacion(educacion: Educacion): Observable<any> {
    return this.http.put<any>(config.baseUrl + "educacion/update", educacion);
  }

  borrarEducacion(id: number): Observable<any> {
    return this.http.delete<any>(config.baseUrl + "educacion/delete/" + id);
  }

  // PROYECTOS
  obtenerDatosProyectos(): Observable<Proyecto[]> {
    return this.http.get<any>(config.baseUrl + "proyecto/read")
  }

  guardarNuevoProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<any>(config.baseUrl + "proyecto/create", proyecto);
  }

  modificarProyecto(proyecto: Proyecto): Observable<any> {
    return this.http.put<any>(config.baseUrl + "proyecto/update", proyecto);
  }

  borrarProyecto(id: number): Observable<any> {
    return this.http.delete<any>(config.baseUrl + "proyecto/delete/" + id);
  }

  // EXPERIENCIA
  obtenerDatosExperiencia(): Observable<Experiencia[]> {
    return this.http.get<any>(config.baseUrl + "experiencia/read")
  }

  guardarNuevaExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<any>(config.baseUrl + "experiencia/create", experiencia);
  }

  modificarExperiencia(experiencia: Experiencia): Observable<any> {
    return this.http.put<any>(config.baseUrl + "experiencia/update", experiencia);
  }

  borrarExperiencia(id: number): Observable<any> {
    return this.http.delete<any>(config.baseUrl + "experiencia/delete/" + id);
  }

  // TECNOLOGIA
  obtenerDatosTecnologia(): Observable<Tecnologia[]> {
    return this.http.get<any>(config.baseUrl + "tecnologia/read")
  }

  guardarNuevaTecnologia(tecnologia: Tecnologia): Observable<Tecnologia> {
    return this.http.post<any>(config.baseUrl + "tecnologia/create", tecnologia);
  }

  modificarTecnologia(tecnologia: Tecnologia): Observable<any> {
    return this.http.put<any>(config.baseUrl + "tecnologia/update", tecnologia);
  }

  borrarTecnologia(id: number): Observable<any> {
    return this.http.delete<any>(config.baseUrl + "tecnologia/delete/" + id);
  }

  // ACERCA DE
  obtenerDatosAcercaDe(): Observable<AcercaDe[]> {
    return this.http.get<any>(config.baseUrl + "acerca-de/read");
  }

  guardarNuevoAcercaDe(acercaDe: AcercaDe): Observable<AcercaDe> {
    return this.http.post<any>(config.baseUrl + "acerca-de/create", acercaDe);
  }

  modificarAcercaDe(acercaDe: AcercaDe): Observable<any> {
    return this.http.put<any>(config.baseUrl + "acerca-de/update", acercaDe);
  }

  borrarAcercaDe(id: number): Observable<any> {
    return this.http.delete<any>(config.baseUrl + "acerca-de/delete/" + id);
  }

  // PERSONA
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
