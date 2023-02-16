import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EvenementsService } from '../Services/evenements.service';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.page.html',
  styleUrls: ['./evenements.page.scss'],
})
export class EvenementsPage implements OnInit {

  lesEvents: any;
  constructor(
    private serviceEvensts: EvenementsService,
    private router: Router
    ) { }

  ngOnInit() {

    this.serviceEvensts.getAllEvents().subscribe(data =>{
      this.lesEvents =data
      console.log(this.lesEvents)
  
    })
  }

  goDetailEvents(id:number){
    console.log(id);
    return this.router.navigate(['/detailevents', id])
  }

  goAllProjetByIdEvents(idEvents:number){
    console.log(idEvents);
    return this.router.navigate(['/projets', idEvents])
  }

  goAllResultatByIdEvents(idEvents:number){
    console.log(idEvents);
    return this.router.navigate(['/resultats', idEvents])
  }


}
