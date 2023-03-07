import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EvenementsService } from '../Services/evenements.service';
import Swal from 'sweetalert2';
import { TokenStorageService } from '../Services/token-storage.service';
import { AuthService } from '../Services/login-services.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.page.html',
  styleUrls: ['./evenements.page.scss'],
})
export class EvenementsPage implements OnInit {

  lesEvents: any;
  constructor(
    private serviceEvensts: EvenementsService,
    private resultatsService: EvenementsService,
    private router: Router,
    private tokenStorage:TokenStorageService,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: object,
    ) { }

  ngOnInit() {

    this.serviceEvensts.getAllEvents().subscribe(data =>{
      this.lesEvents =data
      console.log(this.lesEvents)
  
    })
  }

  goDetailEvents(id:number){
    console.log(id);
    return this.router.navigate(['/detailevents', id])
  }

  // Obtenir les résultats en fonction de l'ID de l'événement
  goAllResultatsByIdEvents(idEvents: number): void {
    console.log(idEvents);

    // Appeler le service pour obtenir les résultats de l'événement
    this.resultatsService.getResultaByIdEvents(idEvents).subscribe(data => {
      const resultats = data.length; // Utiliser une variable locale au lieu d'une variable globale
      console.log(resultats);

      // Vérifier s'il y a des résultats
      if (resultats === 0) {
        // Afficher une notification si l'événement n'est pas terminé
        Swal.fire({
          position:'center',
          title: 'Les resultats ne sont pas proclammer !',
          icon : 'warning',
          confirmButtonText: 'Ok',
          confirmButtonColor: 'green',
          heightAuto: false,
        });
      } else {
        console.log(resultats);
        // Naviguer vers la page des résultats
        this.router.navigate(['/resultats', idEvents]);
      }
    });
  }

  popAllProjetByIdEvents(idEvents: number) {
    console.log(idEvents);
    this.serviceEvensts.getEventsById(idEvents).subscribe(event => {
      if (new Date(event.dateDebut) > new Date()) {
        console.log(event.dateFin)
        Swal.fire({
          position: 'center',
          title: 'Les votes n\'ont pas commencé pour cet événement !',
          icon: 'warning',
          confirmButtonText: 'Ok',
          confirmButtonColor: 'green',
          heightAuto: false,
        });
      } else if (new Date(event.dateFin) < new Date()) {
        Swal.fire({
          position: 'center',
          title: 'Les votes sont cloturé pour cet événement !',
          icon: 'warning',
          confirmButtonText: 'Ok',
          confirmButtonColor: 'green',
          heightAuto: false,
        });
      } else {
        console.log(idEvents);
        this.router.navigate(['/projets', idEvents]);
      }
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
