import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumptionComponent } from './consumption.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {
    path: "",
    component: ConsumptionComponent,
  }
]


@NgModule({
  declarations: [
    ConsumptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ConsumptionModule { }
