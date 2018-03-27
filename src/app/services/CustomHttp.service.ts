import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/Rx';
import {RequestOptions, Http, Headers, RequestMethod, ResponseContentType} from '@angular/http';
import { Router} from '@angular/router';
import { ResponseVO } from '../shared/vo/ResponseVO';




@Injectable()
export class CustomHttpService {

    constructor(private _http: Http,
        private router: Router) {
    }

    post(url: string, body: string): Observable<any> {
        const options: RequestOptions = this.getRequestOptions();
        return this._http.post(url, body, options)
            .map(response  => {
                const responseVO: ResponseVO<any> = <ResponseVO<any>>response.json();
                if (response.headers.get('Authorization') !== null) {
                    const token: string  = response.headers.get('Authorization');
                    // set token in local storage
                } else {
                    // ridirect to login page
                }

                return responseVO;
            }
            )
            .catch((err) => {
                return Observable.throw(err);
            })
            .finally(() => {

            });
    }

    get(url: string): Observable<any> {
        const options: RequestOptions = this.getRequestOptions();
        return this._http.get(url, options)
            .map(response  => {
                const responseVO: ResponseVO<any> = <ResponseVO<any>>response.json();
                if (response.headers.get('Authorization') !== null) {
                    const token: string  = response.headers.get('Authorization');
                    // added token in Local Storage
                }else {
                    // ridirect to login page
                }
                return responseVO;
            })
            .catch((err) => {
                return Observable.throw(err);
            })
            .finally(() => {

            });
    }


getBlobRequestOptions(): RequestOptions {
    let requestOptions: RequestOptions;
    let headers: Headers;
    headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'token');
    requestOptions = new RequestOptions({
        headers: headers,
        method: RequestMethod.Post,
        responseType: ResponseContentType.Blob
    });
    return requestOptions;
}

    postblob(url: string, body: string): Observable<any> {
        const options: RequestOptions = this.getBlobRequestOptions();
        return this._http.post(url, body, options);
    }

    getRequestOptions(): RequestOptions {
        let requestOptions: RequestOptions;
        let headers: Headers;
        headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
            headers.append('userId', 'user');
            headers.append('Authorization', 'token');
        requestOptions = new RequestOptions({
            headers: headers
        });
        return requestOptions;
    }

}

