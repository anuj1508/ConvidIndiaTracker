import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule, MatSlideToggle} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    
  ],
  exports:[MatTabsModule,MatSliderModule,MatSlideToggleModule,MatTableModule,
    MatCardModule,MatFormFieldModule,MatInputModule,MatToolbarModule,MatButtonModule,MatIconModule,MatSnackBarModule,
    MatListModule]
})
export class MaterialDesignModule { }