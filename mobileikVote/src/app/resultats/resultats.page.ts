import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import { ResultatModel } from '../Models/resultat-model';
import { DetailEventServiceService } from '../Services/detail-event-service.service';
import { ProjetsServiceService } from '../Services/projets-service.service';


@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.page.html',
  styleUrls: ['./resultats.page.scss'],
})
export class ResultatsPage implements OnInit {

  public Total=0;
  public MaxHeight= 160;

  idEvents: any;
  allEvents: any;
  nomEvents: any;
  libelleEvent: any;
  imageEvent: any;
  allProjets: any;

 

  constructor(
    private projetService: ProjetsServiceService,
    private route: ActivatedRoute,
    private detaileventService: DetailEventServiceService,
  ) { }

  ngOnInit() {
    
      // nom events
      this.idEvents = this.route.snapshot.params['idEvents']
      this.detaileventService.getEventsById(this.idEvents).subscribe(data =>{
        this.allEvents = data
        this.libelleEvent=data.libelle
        this.imageEvent = data.images
        console.log(this.allEvents)
        console.log(this.libelleEvent)
      });

      this.MontarGrafico();



  }

  public List: Array<ResultatModel> = [];

  MontarGrafico(){
    this.idEvents = this.route.snapshot.params['idEvents']
    this.projetService.getProjetsByIdEvents(this.idEvents).subscribe(data =>{
      this.allProjets = data;
    
      this.List = this.allProjets.map((element: any) => {

        console.log(this.allProjets)
        return {
          Valeur: element.moyTotal,
          couleur: '#1746A0',
          taille: '',
          nom: element.libelle
        }
      });
      
      this.Total = 0;
      this.List.forEach(element  => {
        this.Total += element.Valeur;
      });
    
      this.List.forEach(element => {
        element.taille = Math.round((element.Valeur*this.MaxHeight)/this.Total) + '%';
      });
    });
  }



}
