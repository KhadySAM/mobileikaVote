import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  mycodeVotant:any

  idCode: any;

  constructor(
    private critereService: CriteresServiceService,
    private evaluationService: EvaluationServiceService,
    private route: ActivatedRoute,
    private router: Router,
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


    const codevotantStr = localStorage.getItem('codeWithAllInfos');
    if (codevotantStr) {
      this.mycodeVotant = JSON.parse(codevotantStr);
      
    }
   
    this.projetService.getIdcodeBycode(this.mycodeVotant).subscribe(data =>{
      this.idCode = data

    })

  }

  evaluationVotant: EvaluationVotantModel=new EvaluationVotantModel
  
    submitNote() {
    
      this.criteresAff.forEach(critere => {
        this.evaluationVotant.criteres=critere
        this.evaluationVotant.note=critere.note
        this.evaluationVotant.projets=this.prjCrt
        
       

    
    console.log(this.idCode);

    this.evaluationVotant.codevotant = this.idCode



        console.log(this.evaluationVotant)
        this.evaluationService.doEvaluationByVotant(this.evaluationVotant).subscribe(data=>{
          console.log(data)
        })
        
        setTimeout(()=>{
         
          this.router.navigate(['/projet-votant', this.id]);
         
        },1000)
        
        
        console.log(this.id)
        
      });

    }

    
}
