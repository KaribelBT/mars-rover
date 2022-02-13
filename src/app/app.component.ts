import { Component } from '@angular/core';
import { SearchData } from './interfaces/search-data';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'mars-rover';

  searchData: SearchData = {
    rover: '',
  };

  constructor(
    private _appService: AppService
  ) { }

  getImages(searchData: any){
    this.searchData = searchData;
    
    this._appService.getRoversData(this.searchData)
      .subscribe(result=>{
        console.log(result)
      })

  }


}
