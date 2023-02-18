import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailEventsVotantPage } from './detail-events-votant.page';

const routes: Routes = [
  {
    path: '',
    component: DetailEventsVotantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailEventsVotantPageRoutingModule {}
