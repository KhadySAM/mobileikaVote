import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnexionVotantService } from '../Services/connexion-votant.service';
import { EvenementsService } from '../Services/evenements.service';
import Swal from 'sweetalert2';

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


  disabledBtn: boolean = false;

  

  constructor(
    private codeVotantService: ConnexionVotantService,
    private serviceEvensts: EvenementsService,
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
      // console.log(this.idEvents)
    })

    
  }

  goDetailEventsVotant(idEvents:number){
    console.log(idEvents);
    return this.router.navigate(['/detail-events-votant', idEvents])
  }
  goAllProjetByIdEventsVotant(idEvents: number) {
    console.log(idEvents);

  

    this.router.navigate(['/projet-votant', idEvents]);
  }

  goAllResultatByIdEventsVotant(idEvents:number){
    console.log(idEvents);
    return this.router.navigate(['/resultat-votant', idEvents])
  }

  popAllProjetByIdEvents(idEvents: number) {
    console.log(idEvents);
    this.serviceEvensts.getEventsById(idEvents).subscribe(event => {
      if (new Date(event.dateDebut) > new Date()) {
        console.log(event.dateFin)
        Swal.fire({
          position: 'center',
          title: 'Les votes n\'ont pas commencé pour cet événement !',
          icon: 'warning',
          confirmButtonText: 'Ok',
          confirmButtonColor: 'green',
          heightAuto: false,
        });
      } else if (new Date(event.dateFin) < new Date()) {
        Swal.fire({
          position: 'center',
          title: 'Les votes sont cloturé pour cet événement !',
          icon: 'warning',
          confirmButtonText: 'Ok',
          confirmButtonColor: 'green',
          heightAuto: false,
        });
      } else {
        console.log(idEvents);
        this.router.navigate(['/projets', idEvents]);
      }
    });
  }

}
