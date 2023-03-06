import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvenementsService {

  constructor(private http: HttpClient) { }

  
  // Recuperation de tous les evements
  getAllEvents():Observable<any>{
    return this.http.get('http://localhost:8080/api/auth/getallevents');
  }

   // Recuperation des evements par id
   getEventsById(idevent:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/events/${idevent}`)
   }

      // Recuperation des resultats par id evements
  getResultaByIdEvents(idEvents:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/getResultatParId/${idEvents}`)
   }

}
