import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvaluationModel } from '../Models/evaluation-model';
import { EvaluationVotantModel } from '../Models/evaluation-votant-model';
import { CriteresServiceService } from '../Services/criteres-service.service';
import { EvaluationServiceService } from '../Services/evaluation-service.service';
import { ProjetsServiceService } from '../Services/projets-service.service';
import { TokenStorageService } from '../Services/token-storage.service';

@Component({
  selector: 'app-evaluation-votant',
  templateUrl: './evaluation-votant.page.html',
  styleUrls: ['./evaluation-votant.page.scss'],
})
export class EvaluationVotantPage implements OnInit {

  id:any;
  idProjet:any
  prjCrt:any
  libelleProjet:any

  criteresAff: any[]=[];
  criteres: any;

  constructor(
    private critereService: CriteresServiceService,
    private evaluationService: EvaluationServiceService,
    private route: ActivatedRoute,
    // private tokenStorage:TokenStorageService,
   
    private projetService: ProjetsServiceService,
  ) { }

  ngOnInit() {

    // get des criteres
    this.id = this.route.snapshot.params['id'] 
    this.critereService.getCritersByIdEvents(this.id).subscribe(data =>{
      console.log(this.id)
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

  evaluations: EvaluationVotantModel=new EvaluationVotantModel
    submitNote() {
      this.criteresAff.forEach(critere => {
        this.evaluations.criteres=critere
        this.evaluations.note=critere.note
        this.evaluations.projets=this.prjCrt
        
        // Récupérer les informations depuis le localStorage
        const codeWithAllInfos = localStorage.getItem('codeWithAllInfos');
        if (codeWithAllInfos !== null) {
          const codeWithAllInfosObj = JSON.parse(codeWithAllInfos);
          console.log(codeWithAllInfosObj);
        }

        // this.evaluation.codeWithAllInfosObj

        console.log(this.evaluations)
        // this.evaluationService.doEvaluationByVotant(this.evaluations).subscribe(data=>{
        //   console.log(data)
        // })
        

        
      });

    }
}
