import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { config } from '../data/config/Config';
import { AcercaDe } from '../data/AcercaDe';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  constructor(private http:HttpClient) { }

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
}
