import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailEventServiceService } from '../Services/detail-event-service.service';

@Component({
  selector: 'app-detailevents',
  templateUrl: './detailevents.page.html',
  styleUrls: ['./detailevents.page.scss'],
})
export class DetaileventsPage implements OnInit {

  id:any;
  detailEvents:any
  libelle: any;
  images: any
  dateDebut: any
  dateFin: any
  coefficientUser: any
  coefficientJury: any
  bareme: any
  nbrevotant: any
  pays: any


  constructor(
    private detaileventService: DetailEventServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'] 
    this.detaileventService.getEventsById(this.id).subscribe(data =>{
      this.detailEvents = data
      this.libelle=data.libelle
      this.dateDebut=data.dateDebut
      this.dateFin=data.dateFin
      this.coefficientUser=data.coefficientUser
      this.coefficientJury=data.coefficientJury
      this.nbrevotant=data.nbreVotant
      this.bareme=data.bareme
      this.images=data.images
      this.pays=data.data.nom 
      console.log(this.detailEvents)

    })



}
}
