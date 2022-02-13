import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { ImagesLazyloadModule } from '../shared/images-lazyload/images-lazyload.module';


@NgModule({
  declarations: [
    GridComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ImagesLazyloadModule
  ],
  exports: [
    GridComponent
  ],
})
export class GridModule { }
