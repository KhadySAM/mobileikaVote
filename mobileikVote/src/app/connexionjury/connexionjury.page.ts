import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexionjury',
  templateUrl: './connexionjury.page.html',
  styleUrls: ['./connexionjury.page.scss'],
})
export class ConnexionjuryPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor() { }

  ngOnInit() {
  }

}
