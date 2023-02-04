import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginjuryPage } from './loginjury.page';

const routes: Routes = [
  {
    path: '',
    component: LoginjuryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginjuryPageRoutingModule {}
