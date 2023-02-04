import { Component, OnInit } from '@angular/core';
import { EvenementsService } from '../Services/evenements.service';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.page.html',
  styleUrls: ['./evenements.page.scss'],
})
export class EvenementsPage implements OnInit {

  lesEvents: any;
  constructor(private serviceEvensts: EvenementsService) { }

  ngOnInit() {

    this.serviceEvensts.getAllEvents().subscribe(data =>{
      this.lesEvents =data
      console.log(this.lesEvents)
    })
  }

}
