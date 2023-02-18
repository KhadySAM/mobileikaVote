import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvaluationVotantPage } from './evaluation-votant.page';

const routes: Routes = [
  {
    path: '',
    component: EvaluationVotantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluationVotantPageRoutingModule {}
