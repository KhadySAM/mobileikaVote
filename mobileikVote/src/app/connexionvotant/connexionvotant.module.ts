import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnexionvotantPageRoutingModule } from './connexionvotant-routing.module';

import { ConnexionvotantPage } from './connexionvotant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnexionvotantPageRoutingModule
  ],
  declarations: [ConnexionvotantPage]
})
export class ConnexionvotantPageModule {}
