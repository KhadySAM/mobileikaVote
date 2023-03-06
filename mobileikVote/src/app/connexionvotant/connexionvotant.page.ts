import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import jsQR from 'jsqr';
import { ConnexionVotantService } from '../Services/connexion-votant.service';

@Component({
  selector: 'app-connexionvotant',
  templateUrl: './connexionvotant.page.html',
  styleUrls: ['./connexionvotant.page.scss'],
})
export class ConnexionvotantPage implements OnInit {

  scanActive = false;
  scanResult = null;
  
 
  @ViewChild('video',{static:false}) video!: ElementRef;
  @ViewChild('canvas',{static:false}) canvas!: ElementRef;

  videoElement: any;
  canvasElement: any;
  canvasContext: any;
  loading!: HTMLIonLoadingElement;

  allCodeVotant: any;
  // eventCorrespondant: any;
  codeWithAllInfos: any;

  constructor(
    private connexionVotantService: ConnexionVotantService,
    private loadingCtrl: LoadingController,
    private router: Router,
  ) {}
  ngOnInit(): void {

  }
ngAfterViewInit() {
  this.videoElement = this.video.nativeElement;
  this.canvasElement = this.canvas.nativeElement;
  this.canvasContext = this.canvasElement.getContext('2d');
}


  async startScan(){
    const permission =true;
    if(permission){
      this.scanResult = null;
      const  stream = await navigator.mediaDevices.getUserMedia({
        video:{facingMode: 'environment'}
      });
      this.videoElement.srcObject = stream
      this.videoElement.setAttribute('playinline', true);
      this.videoElement.play();

      this.loading = await this.loadingCtrl.create({});
      await this.loading.present();
      requestAnimationFrame(this.scan.bind(this));
    }
  }

 
  async scan(){
        if(this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA){
          if(this.loading){
            await this.loading.dismiss();
            this.scanActive =true;
          }

          this.canvasElement.height = this.videoElement.videoHeight;
          this.canvasElement.width = this.videoElement.videoWidth;

          //scann
          this.canvasContext.drawImage(
            this.videoElement,
            0,
            0,
            this.canvasElement.width,
            this.canvasElement.height
          );
          const imageData = this.canvasContext.getImageData(
            0,
            0,
            this.canvasElement.width,
            this.canvasElement.height
          );
          const code = jsQR(imageData.data, imageData.width, imageData.height,{
            inversionAttempts:'dontInvert',
          });

            if(code){

              this.scanActive = false;
             
              //  this.scanResult = code.data
              this.connexionVotantService.getEventsByCodeVotant(code.data).subscribe(data =>{

                this.codeWithAllInfos =code.data

                 // Stocker les informations dans le localStorage
                 
                 localStorage.setItem('codeWithAllInfos', JSON.stringify(this.codeWithAllInfos));

                 
  
                 console.log(this.codeWithAllInfos)

                //  Redirection vers une nouvelle page
                 
                 this.router.navigate(['/event-votant', this.codeWithAllInfos])

                //  this.router.navigate(['/event-votant', code.data])
                 
              })
                
              console.log(code)

                console.log("ok");

            }else{
              if(this.scanActive){
                requestAnimationFrame(this.scan.bind(this));
              }
            }
        }else{
          requestAnimationFrame(this.scan.bind(this));
        }
  }

  stopScan(){
    this.scanActive =false;
  }

}
