import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import * as moment from 'moment';
import { SearchData } from './interfaces/search-data';

@Injectable()
export class AppService {

    api_url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
    api_key = 'Vnvr69hrHH0MU9DsiVICzYYFOI3rAZ5ad9Pw95el';

    constructor(
        private _httpClient: HttpClient,
    ) {}

    getRoversData(searchData: SearchData): Observable<any[]> {
        const date = searchData.earth_date ? `earth_date=${searchData.earth_date}` : `sol=${searchData.sol}`
        const camera = searchData.camera ? `&camera=${searchData.camera}` : ''

        const url = `${this.api_url}${searchData.rover}/photos?${date}${camera}&api_key=${this.api_key}`;

        return this._httpClient
            .get<any[]>(url)
            .pipe((response) => response);
    }
}
