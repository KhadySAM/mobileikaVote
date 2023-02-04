import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnexionjuryPageRoutingModule } from './connexionjury-routing.module';

import { ConnexionjuryPage } from './connexionjury.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnexionjuryPageRoutingModule
  ],
  declarations: [ConnexionjuryPage]
})
export class ConnexionjuryPageModule {}
