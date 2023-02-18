import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventVotantPageRoutingModule } from './event-votant-routing.module';

import { EventVotantPage } from './event-votant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventVotantPageRoutingModule
  ],
  declarations: [EventVotantPage]
})
export class EventVotantPageModule {}
