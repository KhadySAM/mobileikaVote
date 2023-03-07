import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultatModel } from '../Models/resultat-model';
import { DetailEventServiceService } from '../Services/detail-event-service.service';
import { ProjetsServiceService } from '../Services/projets-service.service';

@Component({
  selector: 'app-resultat-votant',
  templateUrl: './resultat-votant.page.html',
  styleUrls: ['./resultat-votant.page.scss'],
})
export class ResultatVotantPage implements OnInit {

  public Total=0;
  public MaxHeight= 160;

  idEvents: any;
  allEvents: any;
  nomEvents: any;
  libelleEvent: any;
  imageEvent: any;
  allProjets: any;
  nbreProjets: any;

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
    this.projetService.getResultaByIdEvents(this.idEvents).subscribe(data =>{
      this.allProjets = data;
      this.nbreProjets = data.length
      
      console.log(this.nbreProjets)
    
      this.List = this.allProjets.map((element: any) => {

        return {
          Valeur: element.noteFinal,
          couleur: '#1746A0',
          taille: '',
          nom:  element.projets.libelle
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
