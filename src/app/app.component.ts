import { Component } from '@angular/core';
import { SearchData } from './interfaces/search-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'mars-rover';

  searchData: SearchData = {
    rover: '',
    dateType: '',
    sol: '',
    earth_date: '',
    camera: ''
  };

  constructor() { }

  getImages(searchData: any){
    this.searchData = searchData;
    console.log(this.searchData);    
  }


}
