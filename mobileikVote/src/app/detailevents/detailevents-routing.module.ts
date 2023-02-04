import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetaileventsPage } from './detailevents.page';

const routes: Routes = [
  {
    path: '',
    component: DetaileventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetaileventsPageRoutingModule {}
