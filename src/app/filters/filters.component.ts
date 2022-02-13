import { 
    AfterViewInit,
    Component, 
    ElementRef, 
    EventEmitter, 
    OnInit, 
    Output,
    ViewChild,
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
import { MatButton } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import * as moment from 'moment';
import { SearchData } from '../interfaces/search-data';
import { StorageService } from '../storage.service'

//TO DO: FIND A BETTER WAY TO VALIDATE EMPTY FORM WHEN COMPONENT INITS

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

export class FiltersComponent implements OnInit, AfterViewInit {

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
    @ViewChild('resetBtn')resetBtn: MatButton | undefined;

    errorMessages = {
        required: 'Required'
    }

    constructor(
        private _formBuilder: FormBuilder,
        private _storageService: StorageService
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
    ngOnInit(): void {
        let defaultSearch = {id: 123, rover:'curiosity', sol:'1000'}
        this.searchData.emit(defaultSearch);
    }
    ngAfterViewInit(): void {
        if(this.resetBtn){
            this.resetBtn._elementRef.nativeElement.click();
        }        
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
        if(form.value.camera && form.value.camera.length){
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
        this._storageService.theItem = JSON.stringify(searchValues)
    }

    public resetForm(formDirective: FormGroupDirective){
        if(formDirective) {
            formDirective.resetForm();            
        }    
        this.search.reset();
        this.calendarType = '';
        this.roverOption = ''; 
        this.resetValidation(); 
    }
}