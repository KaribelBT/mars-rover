import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable()
export class AppService {

    api_url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
    api_key = 'Vnvr69hrHH0MU9DsiVICzYYFOI3rAZ5ad9Pw95el';

    constructor(
        private _httpClient: HttpClient,
    ) {}

    getRoversData(): Observable<any[]> {
        const url = `${this.api_url}opportunity/photos?sol=1000&api_key=${this.api_key}`;

        return this._httpClient
            .get<any[]>(url)
            .pipe((response) => response);
    }
}
