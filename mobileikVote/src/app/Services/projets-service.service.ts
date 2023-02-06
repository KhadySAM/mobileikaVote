import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetsServiceService {

  constructor(public http: HttpClient) { }

   // Recuperation des projets par id evements
   getProjetsByIdEvents(idevent:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/projetbyetevents/${idevent}`)
   }

   // Recuperation des projet par id
   getProjetsById(idprojects:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/projets/${idprojects}`)
   }
}
