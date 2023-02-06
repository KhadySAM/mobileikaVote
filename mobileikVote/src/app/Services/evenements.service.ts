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

}
