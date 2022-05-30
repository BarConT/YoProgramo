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
        if (data) {
          sessionStorage.setItem("user", "admin");
        }  
      })
    );
  }

  public logout(): void {
    sessionStorage.removeItem("user");
  }

  public isUserLogged(): boolean {
    return sessionStorage.getItem("user") !== null;
  }
}
