import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjetVotantPageRoutingModule } from './projet-votant-routing.module';

import { ProjetVotantPage } from './projet-votant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjetVotantPageRoutingModule
  ],
  declarations: [ProjetVotantPage]
})
export class ProjetVotantPageModule {}
