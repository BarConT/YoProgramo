import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { config } from '../data/config/Config';
import { Tecnologia } from '../data/Tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  constructor(private http:HttpClient) { }

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
  
}
