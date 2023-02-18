import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetVotantPage } from './projet-votant.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetVotantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetVotantPageRoutingModule {}
