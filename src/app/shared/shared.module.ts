import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableStatsComponent } from './table-stats/table-stats.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { DistrictsStatsComponent } from './districts-stats/districts-stats.component';

@NgModule({
  declarations: [TableStatsComponent, DistrictsStatsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatInputModule
  ],
  exports:[TableStatsComponent, MatTableModule]
})
export class SharedModule { }
