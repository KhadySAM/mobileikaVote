import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailEventServiceService } from '../Services/detail-event-service.service';
import { AuthService } from '../Services/login-services.service';
import { TokenStorageService } from '../Services/token-storage.service';

@Component({
  selector: 'app-detailevents',
  templateUrl: './detailevents.page.html',
  styleUrls: ['./detailevents.page.scss'],
})
export class DetaileventsPage implements OnInit {

  id:any;
  detailEvents:any
  libelle: any;
  images: any
  dateDebut: any
  dateFin: any
  coefficientUser: any
  coefficientJury: any
  bareme: any
  nbrevotant: any
  pays: any


  constructor(
    private detaileventService: DetailEventServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private tokenStorage:TokenStorageService,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: object,) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'] 
    this.detaileventService.getEventsById(this.id).subscribe(data =>{
      this.detailEvents = data
      this.libelle=data.libelle
      this.dateDebut=data.dateDebut
      this.dateFin=data.dateFin
      this.coefficientUser=data.coefficientUser
      this.coefficientJury=data.coefficientJury
      this.nbrevotant=data.nbreVotant
      this.bareme=data.bareme
      this.images=data.images
      this.pays=data.data.nom 
      console.log(this.detailEvents)

    })

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
