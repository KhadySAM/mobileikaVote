import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { ResultatModel } from '../Models/resultat-model';
import { DetailEventServiceService } from '../Services/detail-event-service.service';
import { AuthService } from '../Services/login-services.service';
import { ProjetsServiceService } from '../Services/projets-service.service';
import { TokenStorageService } from '../Services/token-storage.service';


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
  nbreProjets: any;

 

  constructor(
    private projetService: ProjetsServiceService,
    private route: ActivatedRoute,
    private detaileventService: DetailEventServiceService,
    private router: Router,
    private tokenStorage: TokenStorageService,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) { }

  ngOnInit() {
    
      // nom events
      this.idEvents = this.route.snapshot.params['idEvents']
      this.detaileventService.getEventsById(this.idEvents).subscribe(data =>{
        this.allEvents = data
        this.libelleEvent=data.libelle
        this.imageEvent = data.images
        // console.log(this.allEvents)
        // console.log(this.libelleEvent)
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

  logout(): void {
    this.authService.logout1().subscribe({
      next: res => {
        console.log(res);
        this.tokenStorage.clean();
        this.router.navigate(['/loginjury'])
      },
      error: err => {
        console.log(err);
      }
    });

    if (isPlatformBrowser(this.platformId)) {
      const navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function onClick() {
          if (navMain) {
            navMain.classList.remove('show');
          }
        };
      }
    }
  }

}
