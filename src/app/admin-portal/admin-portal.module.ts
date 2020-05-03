import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MainModule } from '../main/main.module';


@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '\dashboard',
        component: AdminDashboardComponent
        
      },
    ]),
    CommonModule,
    MaterialDesignModule,
    ReactiveFormsModule
  ]
})
export class AdminPortalModule { }
