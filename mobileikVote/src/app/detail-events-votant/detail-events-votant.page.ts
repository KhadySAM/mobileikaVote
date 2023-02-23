import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DetailEventServiceService } from '../Services/detail-event-service.service';

@Component({
  selector: 'app-detail-events-votant',
  templateUrl: './detail-events-votant.page.html',
  styleUrls: ['./detail-events-votant.page.scss'],
})
export class DetailEventsVotantPage implements OnInit {

  idEvents:any
  detailEvents:any
  libelle: any;
  images: any
  dateDebut: any
  dateFin: any
  coefficientUser: any
  coefficientJury: any
  bareme: any
  nbrevotant: any
  // pays: any

  constructor(
    private detaileventService: DetailEventServiceService, 
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {

    this.idEvents = this.route.snapshot.params['idEvents'] 
    this.detaileventService.getEventsById(this.idEvents).subscribe(data =>{
      this.detailEvents = data
      this.libelle = data.libelle
      this.dateDebut = data.dateDebut
      this.dateFin = data.dateFin
      this.coefficientUser = data.coefficientUser
      this.coefficientJury = data.coefficientJury
      this.nbrevotant = data.nbreVotant
      this.bareme = data.bareme
      this.images = data.images
      // this.pays = data.data.pays
      console.log(this.idEvents)
    })

}

goEventsById(codeVotant:number){
  console.log(codeVotant);
  return this.router.navigate(['/event-votant', codeVotant])
}

}

