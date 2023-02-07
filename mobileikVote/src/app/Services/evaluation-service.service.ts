import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EvaluationModel } from '../Models/evaluation-model';

@Injectable({
  providedIn: 'root'
})
export class EvaluationServiceService {
  

  constructor(public http: HttpClient) { }

  doEvaluationByJury(evaluation: EvaluationModel):Observable<any>{
    return this.http.post(`http://localhost:8080/api/auth/noterprojetjury`, evaluation)
   }



}
