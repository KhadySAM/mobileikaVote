import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailEventServiceService {

  constructor(public http: HttpClient) { }

   // Recuperation des evements par id
   getEventsById(idevent:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/events/${idevent}`)
   }



 
}
