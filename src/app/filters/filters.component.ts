import { 
  Component, 
  EventEmitter, 
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import * as moment from 'moment';
import { SearchData } from '../interfaces/search-data';

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
  roverOption: string = '';

  cameras = {
    curiosity: ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'],
    opportunity: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
    spirit: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
  }

  @Output() formData = new EventEmitter<SearchData>();
  
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
      camera: new FormControl(
        { value: '' }
      ),
    })
  }

  ngOnInit(): void {
  }

  public calendarSelected(event:string) {
    this.calendarType = event;
  }

  public roverSelected(event:string) {
    this.roverOption = event;
  }
  
  public searchSubmit(formDirective: FormGroupDirective) {
    let submit: SearchData = {
      rover: this.search.value.rover,
      dateType: this.search.value.dateType,
      sol: this.search.value.sol,
      earth_date: moment(this.search.value.earth_date).format('YYYY-MM-DD'),
      camera: this.search.value.camera
    }
    this.formData.emit(submit)
    //formDirective.resetForm();
    this.search.reset(); 
  }

  public addFavorite () {
    console.log(this.search.value)
    //Adding values to the storage.
    let storedData: any = localStorage.getItem('favoriteSearch')
    const searchValue = this.search.value;
    let searchValues = []
    if(!storedData && this.search.value){
      searchValues.push(searchValue)
    }else{
      let parsedData = JSON.parse(storedData)
      parsedData.push(searchValue)
      searchValues = parsedData
    }
    localStorage.setItem('favoriteSearch', JSON.stringify(searchValues))
    //let favoriteSearch = localStorage.getItem('favoriteSearch');

    
  }
}
