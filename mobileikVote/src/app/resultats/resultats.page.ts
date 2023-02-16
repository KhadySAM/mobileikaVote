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

 

  //  public chart: any;
  // p1: any;
  // moy1: any;
  // p2: any;
  // moy2: any;
  // nbreProjet: any;
  // p3: any;
  constructor(
    private projetService: ProjetsServiceService,
    private route: ActivatedRoute,
    private detaileventService: DetailEventServiceService,
  ) { }

  ngOnInit() {

    // this.idEvents = this.route.snapshot.params['idEvents'] 
    // this.projetService.getProjetsByIdEvents(this.idEvents).subscribe(data =>{
    //   this.allProjets = data
    //   this.nbreProjet = data.lenght

    //   this.p1=this.allProjets[0].libelle,
    //   this.moy1=this.allProjets[0].moyTotal
    //   this.p2=this.allProjets[1].libelle,
    //   this.moy2=this.allProjets[1].moyTotal


    //   console.log(this.allProjets);
    //   this.createChart();

    // });
    
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
          couleur: '#EC972D',
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

  // createChart(){
  
  //   this.chart = new Chart("MyChart", {
  //     type: 'bar', //this denotes tha type of chart

  //     data: {// values on X-Axis
  //       labels: [this.p1, this.p2 ], 
	//        datasets: [
  //         {
  //           label: "Moyenne des projets",
  //           data: [this.moy1,this.moy2],
  //           backgroundColor: 'blue'
  //         }, 
  //       ]
  //     },
  //     options: {
  //       aspectRatio:2.5
  //     }
      
  //   });
  // }


}
