import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionVotantService {

  constructor(public http: HttpClient) { }

  // Recuperation de tous les code votant
  getAllCodeVotant():Observable<any>{
    return this.http.get('http://localhost:8080/api/auth/getallcodevotant');
  }

  //  Recuperation des evenements par les code votant
  getEventsByCodeVotant(codeVotant:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/getEvByCode/${codeVotant}`)
   }

}
