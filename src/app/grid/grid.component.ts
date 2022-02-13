import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchData } from '../interfaces/search-data';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  @Input() orderedPhotos: any[] = [];
  @Input() searchHistory: SearchData = {id: 123, rover:'curiosity', sol:'1000'};
  @Output() searchData = new EventEmitter<SearchData>();
  
  constructor() { }

  onPageChange(page: any) {
    console.log(page.pageIndex)
    let searchDataWithPage = {...this.searchHistory, page:page.pageIndex}
    this.searchData.emit(searchDataWithPage);
  }

}
