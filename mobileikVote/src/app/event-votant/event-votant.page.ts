import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnexionVotantService } from '../Services/connexion-votant.service';

@Component({
  selector: 'app-event-votant',
  templateUrl: './event-votant.page.html',
  styleUrls: ['./event-votant.page.scss'],
})
export class EventVotantPage implements OnInit {

  codeVotant:any
  eventCorresp:any  
  nomEvent:any
  logoEvent:any
  idCode:any
  idEvents:any

  constructor(
    private codeVotantService: ConnexionVotantService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {

    this.codeVotant = this.route.snapshot.params['codeVotant']
    this.codeVotantService.getEventsByCodeVotant(this.codeVotant).subscribe(data =>{
      console.log(this.codeVotant)
      this.eventCorresp = data.evenements
      this.nomEvent = data.evenements.libelle
      this.logoEvent = data.evenements.images
      this.idEvents = data.evenements.id
      this.idCode = data.id
      console.log(this.idEvents)
    })

    
  }

  goDetailEventsVotant(idEvents:number){
    console.log(idEvents);
    return this.router.navigate(['/detail-events-votant', idEvents])
  }

  goAllProjetByIdEventsVotant(idEvents:number){
    console.log(idEvents);
    return this.router.navigate(['/projet-votant', idEvents])
  }

  goAllResultatByIdEventsVotant(idEvents:number){
    console.log(idEvents);
    return this.router.navigate(['/resultat-votant', idEvents])
  }

}
