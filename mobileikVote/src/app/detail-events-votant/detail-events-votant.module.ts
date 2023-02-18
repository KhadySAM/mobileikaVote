import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailEventsVotantPageRoutingModule } from './detail-events-votant-routing.module';

import { DetailEventsVotantPage } from './detail-events-votant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailEventsVotantPageRoutingModule
  ],
  declarations: [DetailEventsVotantPage]
})
export class DetailEventsVotantPageModule {}
