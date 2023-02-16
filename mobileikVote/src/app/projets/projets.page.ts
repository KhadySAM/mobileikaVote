import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailEventServiceService } from '../Services/detail-event-service.service';
import { ProjetsServiceService } from '../Services/projets-service.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.page.html',
  styleUrls: ['./projets.page.scss'],
})
export class ProjetsPage implements OnInit {

  id:any;
  idEvents:any;
  allProjets:any
  allEvents:any
  libelleEvent:any
 


  constructor(
    private projetService: ProjetsServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private detaileventService: DetailEventServiceService,) { }

  ngOnInit() {

    this.idEvents = this.route.snapshot.params['idEvents'] 
    this.projetService.getProjetsByIdEvents(this.idEvents).subscribe(data =>{
      this.allProjets = data
      console.log(this.allProjets);
    });
    
      // nom events
      this.detaileventService.getEventsById(this.idEvents).subscribe(data =>{
        this.allEvents = data
        this.libelleEvent=data.libelle
        console.log(this.allEvents)
        console.log(this.libelleEvent)
      })
    

  }

  goAllCritereByIdEvents(id:number, idProjet:number){
    console.log(id);
   // console.log("gggggggggggggggggggggggggggggggggggggggg");
    return this.router.navigate(['/evaluation', id  ,idProjet])
  }

}
