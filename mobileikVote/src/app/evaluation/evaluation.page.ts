import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { CriteresServiceService } from '../Services/criteres-service.service';
import { DetailEventServiceService } from '../Services/detail-event-service.service';
import { ProjetsServiceService } from '../Services/projets-service.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.page.html',
  styleUrls: ['./evaluation.page.scss'],
})
export class EvaluationPage implements OnInit {

  note:any
  
  lastEmittedValue: RangeValue = 0;

  lastEmittedValue1: RangeValue = 0;

  lastEmittedValue2: RangeValue = 0;
  allEvents: any;

  onIonChange(ev: Event) {
    this.lastEmittedValue = (ev as RangeCustomEvent).detail.value;
  }
  onIonChange1(ev: Event) {
    this.lastEmittedValue1 = (ev as RangeCustomEvent).detail.value;
  }
  onIonChange2(ev: Event) {
    this.lastEmittedValue2 = (ev as RangeCustomEvent).detail.value;
  }


  id:any;
  allCriteres:any
  idpjt:any;
  prjCrt:any
  libellepj:any


  constructor(
    private critereService: CriteresServiceService,
    private route: ActivatedRoute,
    private projetService: ProjetsServiceService
  ) { }

  criteres: any[] = [];

  notes: number[] = [];


  ngOnInit() {

    this.id = this.route.snapshot.params['id'] 
    this.critereService.getCritersByIdEvents(this.id).subscribe(data =>{
      this.allCriteres = data
      this.criteres = this.allCriteres
      console.log(this.allCriteres);
    });


    // nom projet
    this.id = this.route.snapshot.params['id']
      this.projetService.getProjetsById(this.id).subscribe(data =>{
        this.prjCrt = data

        this.libellepj=data.libelle
        console.log(this.prjCrt)
 
      });

  }


}
