import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { config } from '../data/config/Config';
import { Proyecto } from '../data/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http:HttpClient) { }

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
