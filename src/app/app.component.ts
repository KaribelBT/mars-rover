import { Component } from '@angular/core';
import { SearchData } from './interfaces/search-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'mars-rover';

  formData: SearchData = {
    rover: '',
    dateType: '',
    sol: '',
    earth_date: '',
    camera: ''
  };

  constructor() { }

  getImages(formData: any){
    this.formData = formData;
    console.log(this.formData);    
  }


}
