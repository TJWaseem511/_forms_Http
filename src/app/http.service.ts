import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable()
export class HttpService implements OnInit{

  constructor(private http:HttpClient) {

   }
  ngOnInit(){}

  post(email: string, password: string): Observable<any>{
   return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAG33-LNQCh2y7ihNO_SpOVlaUw-6gedP4', {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }

}