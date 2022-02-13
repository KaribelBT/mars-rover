import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 


@NgModule({
  declarations: [
    GridComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [
    GridComponent
  ],
})
export class GridModule { }
