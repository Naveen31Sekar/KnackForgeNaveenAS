import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loginformat } from './loginformat';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL ="http://127.0.0.1:8000/api";

httpOptions = {
  headers : new HttpHeaders({
    'Content-type':'application/json',
    'Authorization': 'Bearer' + localStorage.getItem('token')
  })

};

  constructor( private httpClient: HttpClient) { }
  adduser(post:any):Observable<Loginformat>{
    return this.httpClient.post<Loginformat>(this.apiURL + '/login/',JSON.stringify(post), this.httpOptions)
  }
  finduser(data:any):Observable<Loginformat>{
    return this.httpClient.post<Loginformat>(this.apiURL + '/hello/' , data,this.httpOptions)
  }
}
