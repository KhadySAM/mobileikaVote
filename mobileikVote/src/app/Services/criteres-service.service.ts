import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriteresServiceService {

  constructor(public http: HttpClient) { }

   // Recuperation des criteres par id event
   getCritersByIdEvents(idevent:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/criteresbyevents/${idevent}`)
   }
}
