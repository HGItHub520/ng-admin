import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoginedIn: any = false;
  public redirectUrl: string;
  constructor(private http: HttpClient) { }

  loginIn(loginForm): Observable<Object>  {
    return this.http.post('/loan/auth/login', loginForm).pipe(
      tap(val => {
        console.log('auth val', val);
        this.isLoginedIn = true;
        sessionStorage.setItem('status', this.isLoginedIn);
      })
    );
  }

  loginOut(): void {
    this.isLoginedIn = false;
    sessionStorage.removeItem('status');
  }
  setToken(token: string): void {
    Cookies.set('token', token);
  }
  getToken(): string {
    return Cookies.get('token');
  }
}
