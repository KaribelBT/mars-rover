import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'mars-rover';

  formData: any = {};

  constructor() { }

  getImages(formData: any){
    this.formData = formData;
    console.log(this.formData);    
  }


}
