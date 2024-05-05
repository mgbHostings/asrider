import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddaccountComponent } from './addaccount.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {
    path: "",
    component: AddaccountComponent,
  }
]

@NgModule({
  declarations: [
    AddaccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AddaccountModule { }
