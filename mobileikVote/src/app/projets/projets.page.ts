import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { DetailEventServiceService } from '../Services/detail-event-service.service';
import { AuthService } from '../Services/login-services.service';
import { ProjetsServiceService } from '../Services/projets-service.service';
import { TokenStorageService } from '../Services/token-storage.service';

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

  Codevotant:any
  idUser:any

  textContentFalse= 'Noter'
  textContentTrue= 'Déjà noté'


  constructor(
    private projetService: ProjetsServiceService,
    private route: ActivatedRoute,
    private detaileventService: DetailEventServiceService,
    private router: Router,
    private tokenStorage:TokenStorageService,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: object,
    ) { }

  ngOnInit() {

    this.idEvents = this.route.snapshot.params['idEvents'] 
    this.projetService.getProjetsByIdEvents(this.idEvents).subscribe(data =>{
      this.allProjets = data
      console.log(this.allProjets);
    });

    
    this.idEvents = this.route.snapshot.params['idEvents'] 
    this.projetService.getProjetsByIdEvents(this.idEvents).subscribe(data =>{
      this.allProjets = data
      console.log(this.allProjets);
      

      const idUser = this.tokenStorage.getUser().id
      console.log(idUser);
      
   
    let observables = [];
        for(let i = 0; i < this.allProjets.length; i++ ){
          console.log(idUser);
          observables.push(this.projetService.checkEvaluationUser(idUser, this.allProjets[i].id));
        }

        forkJoin(observables).subscribe(results => {
          for(let i = 0; i < results.length; i++ ){
            this.allProjets[i].statut = results[i];
          }
          console.log(this.allProjets);
          
          this.router.navigate(['/projets', this.idEvents])
        });


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
    
    return this.router.navigate(['/evaluation', id  ,idProjet])
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


  // logout(): void {
  //   this.authService.logout1().subscribe({
  //     next: res => {
  //       console.log(res);
  //       this.tokenStorage.clean();
  //       this.router.navigate(['/login'])
  //       // window.location.reload();
  //     },
  //     error: err => {
  //       console.log(err);
  //     }
  //   });

  // } 

}
