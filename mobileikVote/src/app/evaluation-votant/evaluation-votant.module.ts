import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvaluationVotantPageRoutingModule } from './evaluation-votant-routing.module';

import { EvaluationVotantPage } from './evaluation-votant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvaluationVotantPageRoutingModule
  ],
  declarations: [EvaluationVotantPage]
})
export class EvaluationVotantPageModule {}
