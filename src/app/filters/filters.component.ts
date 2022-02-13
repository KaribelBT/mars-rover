import { 
  Component, 
  EventEmitter, 
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FiltersComponent implements OnInit {

  search: FormGroup;
  rovers: string[]= ['curiosity', 'opportunity', 'spirit'];
  dateTypes: string[]= ['sol', 'earth'];
  calendarType: string = '';

  @Output() formData = new EventEmitter<object>();
  
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
      ),
      solDate: new FormControl(
        { value: '' },
        [Validators.required]
      ),
      earth_date: new FormControl(
        { value: '' },
        [Validators.required]
      ),
    })
  }

  ngOnInit(): void {
    console.log('holaa')
  }

  public calendarSelected(event:string) {
    this.calendarType = event;
  }
  
  public searchSubmit(formDirective: FormGroupDirective) {
    this.formData.emit({
      rover: this.search.value.rover,
      dateType: this.search.value.dateType,
      sol: this.search.value.sol,
      earth_date: moment(this.search.value.earth_date).format('YYYY-MM-DD')
    })
    formDirective.resetForm();
    this.search.reset(); 
  }

}
