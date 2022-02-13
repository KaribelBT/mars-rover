import { Component, Input, OnInit } from '@angular/core';
import { SearchData } from '../interfaces/search-data';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  @Input() orderedPhotos: any[] = [];
  @Input() searchData: SearchData = {id: 123, rover:'curiosity', sol:'1000'};
  
  constructor() { }

}
