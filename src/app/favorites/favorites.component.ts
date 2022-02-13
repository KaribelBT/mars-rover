import { Component, OnInit } from '@angular/core';
import { SearchData } from '../interfaces/search-data';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  favorites:SearchData[] = [];

  constructor(
    _storageService: StorageService
  ) {
      _storageService.itemValue
        .subscribe((nextValue) => {
          this.favorites = JSON.parse(nextValue)
        })
  }

  deleteFav(id:number) {
    this.favorites.splice(this.favorites.findIndex(function(i){
      return i.id === id;
    }), 1);
    localStorage.setItem('favoriteSearch', JSON.stringify(this.favorites))    
  }

}
