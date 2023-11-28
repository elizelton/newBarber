import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(true);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  login(username: string, password: string): Observable<boolean> {

    const isAuthenticated = username === 'teste' && password === 'teste';

    this.isAuthenticatedSubject.next(isAuthenticated);
    return of(isAuthenticated);
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
  }
}
