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
  libelle:any
 


  constructor(
    private projetService: ProjetsServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private detaileventService: DetailEventServiceService,) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'] 
    this.projetService.getProjetsByIdEvents(this.id).subscribe(data =>{
      this.allProjets = data
      console.log(this.allProjets);
    });
    
    this.id = this.route.snapshot.params['id']
      // nom events
      this.detaileventService.getEventsById(this.id).subscribe(data =>{
        this.allEvents = data
        this.libelle=data.libelle
        this.idEvents=data.id
        console.log(this.allEvents)
        console.log(this.id)
      })
    

  }

  goAllCritereByIdEvents(id:number){
    console.log(id);
   // console.log("gggggggggggggggggggggggggggggggggggggggg");
    return this.router.navigate(['/evaluation', id])
  }

}
