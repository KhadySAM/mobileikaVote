import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetsServiceService {
  setEvaluation: any;
 

  constructor(public http: HttpClient) { }

   // Recuperation des projets par id evements
   getProjetsByIdEvents(idEvents:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/projetbyevents/${idEvents}`)
   }

   // Recuperation des projet par id
   getProjetsById(idprojects:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/projets/${idprojects}`)
   }

      // Recuperation des resultats par id evements
  getResultaByIdEvents(idEvents:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/getResultatParId/${idEvents}`)
   }

       // Recuperation des resultats par id evements
  getIdcodeBycode(code:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/getEvByCode/${code}`)
   }

       // Recuperation des resultats par id evements
  checkEvaluation(idCode:any, idProjet:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/check/${idCode}/${idProjet}`)
   }

   checkEvaluationUser(idUser:any, idProjet:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/checkJury/${idUser}/${idProjet}`)
   }
}
