import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetaileventsPageRoutingModule } from './detailevents-routing.module';

import { DetaileventsPage } from './detailevents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetaileventsPageRoutingModule
  ],
  declarations: [DetaileventsPage]
})
export class DetaileventsPageModule {}
