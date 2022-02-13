import { Component, OnInit } from '@angular/core';
import { SearchData } from '../interfaces/search-data';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites:SearchData[] = [];

  constructor() { }

  ngOnInit(): void {
    let storedData: any = localStorage.getItem('favoriteSearch')
    this.favorites = JSON.parse(storedData)
  }

  deleteFav(id:number) {
    this.favorites.splice(this.favorites.findIndex(function(i){
      return i.id === id;
    }), 1);
    localStorage.setItem('favoriteSearch', JSON.stringify(this.favorites))    
  }

}
