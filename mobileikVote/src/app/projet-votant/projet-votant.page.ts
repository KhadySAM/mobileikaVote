import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { DetailEventServiceService } from '../Services/detail-event-service.service';
import { ProjetsServiceService } from '../Services/projets-service.service';

@Component({
  selector: 'app-projet-votant',
  templateUrl: './projet-votant.page.html',
  styleUrls: ['./projet-votant.page.scss'],
})
export class ProjetVotantPage implements OnInit {

  id:any;
  idEvents:any;
  idEventsRed:any
  allProjets:any
  allEvents:any
  libelleEvent:any

  Codevotant:any
  idCodevotant:any

  statut:any
  
  textContentFalse= 'Noter'
  textContentTrue= 'Déjà noté'

  constructor(
    private projetService: ProjetsServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private detaileventService: DetailEventServiceService,
    ) { }

  ngOnInit() {

    this.idEvents = this.route.snapshot.params['idEvents'] 
    this.projetService.getProjetsByIdEvents(this.idEvents).subscribe(data =>{
      this.allProjets = data
      
      console.log(this.allProjets);
      
      const codevotantStr = localStorage.getItem('codeWithAllInfos');
    if (codevotantStr) {
      this.Codevotant = JSON.parse(codevotantStr);
      
    }
    console.log(this.Codevotant);

    console.log(this.Codevotant);
      this.projetService.getIdcodeBycode(this.Codevotant).subscribe(data =>{
        this.idCodevotant = data.id;

        let observables = [];
        for(let i = 0; i < this.allProjets.length; i++ ){
          observables.push(this.projetService.checkEvaluation(this.idCodevotant, this.allProjets[i].id));
        }

        forkJoin(observables).subscribe(results => {
          for(let i = 0; i < results.length; i++ ){
            this.allProjets[i].statut = results[i];
          }
          console.log(this.allProjets);
          
          this.router.navigate(['/projet-votant', this.idEvents])
        });

      });

    });

      // nom events
      this.detaileventService.getEventsById(this.idEvents).subscribe(data =>{
        this.allEvents = data
        this.libelleEvent=data.libelle
        this.idEventsRed = data.id

        console.log(this.allEvents)
        console.log(this.libelleEvent)
      })
  }

  
  goAllCritereByIdEvents(id:number, idProjet:number) {
    console.log(id);  
    return this.router.navigate(['/evaluation-votant', id, idProjet]);
    

  }

  disableButton(id: string) {
    const button = document.getElementById(id) as HTMLButtonElement;
    button.disabled = true;
    button.textContent = 'Déjà noté'; // Changer le texte du bouton
    
  }
    
}
  

 




