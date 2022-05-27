import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { config } from '../data/config/Config'
import { Educacion } from '../data/Educacion';
import { Proyecto } from '../data/Proyecto';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any> {
    return this.http.get('./assets/data/data.json');
  }

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
}
