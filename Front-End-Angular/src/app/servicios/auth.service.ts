import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { LoginDto } from '../data/LoginDto';
import { config } from '../data/config/Config'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public login(credenciales: LoginDto): Observable<Boolean> {
    return this.http.post<Boolean>(config.baseUrl + "login", credenciales).pipe(
      tap((data: Boolean) => {
        sessionStorage.setItem("user", "admin");
      })
    );
  }

  public logout(): void {
    sessionStorage.removeItem("user");
    window.location.reload(); // VER
  }

  public isUserLogged(): boolean {
    return sessionStorage.getItem("user") !== null;
  }
}
