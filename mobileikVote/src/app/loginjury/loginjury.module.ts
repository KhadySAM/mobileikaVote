import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginjuryPageRoutingModule } from './loginjury-routing.module';

import { LoginjuryPage } from './loginjury.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginjuryPageRoutingModule
  ],
  declarations: [LoginjuryPage]
})
export class LoginjuryPageModule {}
