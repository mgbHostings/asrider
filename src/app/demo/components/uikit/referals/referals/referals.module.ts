import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferalsComponent } from './referals.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {
    path: "",
    component: ReferalsComponent,
  }
]

@NgModule({
  declarations: [
    ReferalsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ReferalsModule { }
