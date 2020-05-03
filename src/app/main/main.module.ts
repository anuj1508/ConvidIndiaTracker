import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { SharedModule } from '../shared/shared.module';
import { CountryDataComponent } from './country-data/country-data.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MainComponent, DashboardComponent, LatestNewsComponent, PrecautionsComponent, CountryDataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent
        
      }]),
    MaterialDesignModule,
    SharedModule
  ]
})
export class MainModule { }
