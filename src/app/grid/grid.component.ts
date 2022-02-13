import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() orderedPhotos: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.orderedPhotos)
  }

}
