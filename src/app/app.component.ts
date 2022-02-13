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
    id: 0,
    rover: '',
  };

  orderedPhotos: any[] = [];

  constructor(
    private _appService: AppService
  ) { }

  getImages(searchData: any){
    this.searchData = searchData;
    
    this._appService.getRoversData(this.searchData)
      .subscribe((result: any)=>{
        this.orderedPhotos = [...result.photos].reverse();
      })

  }


}
