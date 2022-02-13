import { 
    Component, 
    EventEmitter, 
    Output,
    ViewEncapsulation
  } from '@angular/core';
import { 
    FormBuilder, 
    FormGroup, 
    FormControl, 
    FormGroupDirective, 
    NgForm, 
    Validators 
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as moment from 'moment';
import { SearchData } from '../interfaces/search-data';

export class MyErrorStateMatcher implements ErrorStateMatcher {
isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
}
}

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class FiltersComponent {

    rovers: string[]= ['curiosity', 'opportunity', 'spirit'];
    dateTypes: string[]= ['sol', 'earth'];
    cameras = {
        curiosity: ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'],
        opportunity: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
        spirit: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
    }

    matcher = new MyErrorStateMatcher();
    search: FormGroup;
    formDirective: FormGroupDirective | undefined;   
    calendarType: string = '';
    roverOption: string = '';  

    @Output() searchData = new EventEmitter<SearchData>();

    errorMessages = {
        required: 'Required'
    }

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
            date: new FormControl(
                { value: '' },
                [Validators.required]
            ),
            camera: new FormControl(
                { value: '' }
            )
        })
    }

    private parseSearchData(form: FormGroup): SearchData {
        let obj: any = {
            id:  Math.round(Date.now() * Math.random()),
            rover: form.value.rover,
        }
        if(form.value.dateType === 'sol'){
            obj.sol = form.value.date
        }if(form.value.dateType === 'earth'){
            obj.earth_date = moment(form.value.date).format('YYYY-MM-DD')
        }
        if(form.value.camera.length){
            obj.camera = form.value.camera
        }
        return obj
    }

    private resetValidation () {
        this.search.clearValidators();
        this.search.updateValueAndValidity();
    }

    public calendarSelected(event:string) {
        this.calendarType = event;
    }

    public roverSelected(event:string) {
        this.roverOption = event;
    }

    public searchSubmit() {  
        this.searchData.emit(this.parseSearchData(this.search));
        this.resetValidation();
        
        
    }

    public addFavorite() {
        let storedData: any = localStorage.getItem('favoriteSearch')
        const searchValue = this.parseSearchData(this.search);
        let searchValues = []
        if(!storedData){
            searchValues.push(searchValue)
        }else{
            let parsedData = JSON.parse(storedData)
            parsedData.push(searchValue)
            searchValues = parsedData
        }
        localStorage.setItem('favoriteSearch', JSON.stringify(searchValues))    
    }

    public resetForm(formDirective: FormGroupDirective){
        if(formDirective) {
        formDirective.resetForm();
        this.search.reset();
        this.calendarType = '';
        this.roverOption = ''; 
        this.resetValidation(); 
        }    
    }
}