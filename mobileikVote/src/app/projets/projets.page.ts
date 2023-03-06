import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { DetailEventServiceService } from '../Services/detail-event-service.service';
import { ProjetsServiceService } from '../Services/projets-service.service';
import { TokenStorageService } from '../Services/token-storage.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.page.html',
  styleUrls: ['./projets.page.scss'],
})
export class ProjetsPage implements OnInit {

  id:any;
  idEvents:any;
  allProjets:any
  allEvents:any
  libelleEvent:any

  Codevotant:any
  idUser:any

  textContentFalse= 'Noter'
  textContentTrue= 'Déjà noté'


  constructor(
    private projetService: ProjetsServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private tokenStorage:TokenStorageService,
    private detaileventService: DetailEventServiceService,) { }

  ngOnInit() {

    this.idEvents = this.route.snapshot.params['idEvents'] 
    this.projetService.getProjetsByIdEvents(this.idEvents).subscribe(data =>{
      this.allProjets = data
      console.log(this.allProjets);
    });

    
    this.idEvents = this.route.snapshot.params['idEvents'] 
    this.projetService.getProjetsByIdEvents(this.idEvents).subscribe(data =>{
      this.allProjets = data
      console.log(this.allProjets);
      

      const idUser = this.tokenStorage.getUser().id
      console.log(idUser);
      
   
    let observables = [];
        for(let i = 0; i < this.allProjets.length; i++ ){
          console.log(idUser);
          observables.push(this.projetService.checkEvaluationUser(idUser, this.allProjets[i].id));
        }

        forkJoin(observables).subscribe(results => {
          for(let i = 0; i < results.length; i++ ){
            this.allProjets[i].statut = results[i];
          }
          console.log(this.allProjets);
          
          this.router.navigate(['/projets', this.idEvents])
        });


    });
    
      // nom events
      this.detaileventService.getEventsById(this.idEvents).subscribe(data =>{
        this.allEvents = data
        this.libelleEvent=data.libelle
        console.log(this.allEvents)
        console.log(this.libelleEvent)
      })
    

  }

  goAllCritereByIdEvents(id:number, idProjet:number){
    
    return this.router.navigate(['/evaluation', id  ,idProjet])
  }

  

}
