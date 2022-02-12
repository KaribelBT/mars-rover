import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { FiltersComponent } from './filters.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FiltersComponent
  ],
  imports: [
    CommonModule,
    MatCommonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule

  ],
  providers: [
    MatCommonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    FiltersComponent
  ]
})
export class FiltersModule { }
