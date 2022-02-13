import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltersModule } from './filters/filters.module';

import { GridModule } from './grid/grid.module';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FiltersModule,
    GridModule,
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
