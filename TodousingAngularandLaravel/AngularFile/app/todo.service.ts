import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './data';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private apiURL ="http://127.0.0.1:8000/api";
httpOptions = {
  headers : new HttpHeaders({
    'Content-type':'application/json',
      'Authorization' : 'Bearer' +  localStorage.getItem('token')
  })
};
  constructor(private httpClient :HttpClient, private loginservice :LoginService) { }

  gettasks():Observable<Data[]>{
    return this.httpClient.get<Data[]>(this.apiURL + '/operation/',this.httpOptions).pipe()
  }
  
  addtask(post:any):Observable<Data>{
    var token = localStorage.getItem('token');
    var httpOptions = {
      headers : new HttpHeaders({
        'Content-type':'application/json', 
        'Authorization' : `Bearer ${token}`
      })
    }
    return this.httpClient.post<Data>(this.apiURL + '/operation/', JSON.stringify(post), this.httpOptions)
  }

  findtask(id:any):Observable<Data>{
    return this.httpClient.get<Data>(this.apiURL + '/operation/' + id,this.httpOptions).pipe()
  }
  updatetask(id:any, post:any):Observable<Data>{
    return this.httpClient.put<Data>(this.apiURL + '/operation/' + id, JSON.stringify(post),this.httpOptions)
  }
  deletetask(id:any){
    return this.httpClient.delete<Data>(this.apiURL + '/operation/' + id,this.httpOptions).pipe()
  }
  editTask(task: any): Observable<any> {
    return this.httpClient.put<any>(`/api/tasks/${task.id}`, task); // Assuming API endpoint and ID is in the data
  }



 
}

