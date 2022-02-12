import { 
  Component, 
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class FiltersComponent implements OnInit {

  search: FormGroup;
  rovers: string[]= ['curiosity', 'opportunity', 'spirit'];
  dateTypes: string[]= ['sol', 'earth'];
  calendarType: string = '';

  constructor(
    private _formBuilder: FormBuilder,
  ) { 
    this.search = this._formBuilder.group({
      rover: new FormControl(
        { value: '' },
        [Validators.required]
      ),
      dateType: new FormControl(
        { value: '' },
        [Validators.required]
      )
    })
  }

  ngOnInit(): void {
    console.log('holaa')
  }

  public calendarSelected(event:string) {
    this.calendarType = event;
  }
  

}
