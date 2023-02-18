import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultatVotantPageRoutingModule } from './resultat-votant-routing.module';

import { ResultatVotantPage } from './resultat-votant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultatVotantPageRoutingModule
  ],
  declarations: [ResultatVotantPage]
})
export class ResultatVotantPageModule {}
