import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { EvaluationModel } from '../Models/evaluation-model';
import { CriteresServiceService } from '../Services/criteres-service.service';
import { DetailEventServiceService } from '../Services/detail-event-service.service';
import { EvaluationServiceService } from '../Services/evaluation-service.service';
import { ProjetsServiceService } from '../Services/projets-service.service';
import { UserService } from '../Services/user-service.service';
import { TokenStorageService } from '../Services/token-storage.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.page.html',
  
  styleUrls: ['./evaluation.page.scss'],
})
export class EvaluationPage implements OnInit {

  id:any;
  idProjet:any
  prjCrt:any
  libelleProjet:any

  criteresAff: any[]=[];
  criteres: any;

//  criteres: Critere[];

  constructor(
    private critereService: CriteresServiceService,
    private evaluationService:EvaluationServiceService,
    private route: ActivatedRoute,
    private tokenStorage:TokenStorageService,
    private projetService: ProjetsServiceService,
   
  ) { }



  ngOnInit() {

    // get des criteres
    this.id = this.route.snapshot.params['id'] 
    this.critereService.getCritersByIdEvents(this.id).subscribe(data =>{
      this.criteresAff = data;
      console.log(this.criteresAff)
    });


    // nom projet
    this.idProjet = this.route.snapshot.params['idProjet'] 
      this.projetService.getProjetsById(this.idProjet).subscribe(data =>{
        this.prjCrt = data 
        this.libelleProjet=data.libelle
        console.log(this.libelleProjet)
 
      });

    }
    evaluation:EvaluationModel=new EvaluationModel
    submitNote() {
      this.criteresAff.forEach(critere => {
        this.evaluation.criteres=critere
        this.evaluation.note=critere.note
        this.evaluation.projets=this.prjCrt
        console.log(this.tokenStorage.getUser())
        this.evaluation.user={
          'id':this.tokenStorage.getUser().id
          
        }
        

        console.log(this.evaluation)
        this.evaluationService.doEvaluationByJury(this.evaluation).subscribe(data=>{
          console.log(data)
        })

        
      });

    }

}

  

  


