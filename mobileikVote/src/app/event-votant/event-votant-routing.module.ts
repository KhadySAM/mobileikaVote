import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventVotantPage } from './event-votant.page';

const routes: Routes = [
  {
    path: '',
    component: EventVotantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventVotantPageRoutingModule {}
