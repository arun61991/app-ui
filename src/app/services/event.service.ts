import { Injectable } from '@angular/core';
import { CustomHttpService } from './CustomHttp.service';
import { Observable } from 'rxjs/Observable';
import { ResponseVO } from '../shared/vo/ResponseVO';
import { RequestVO } from '../shared/vo/RequestVO';
import { EventVO } from '../shared/vo/EventVO';

@Injectable()
export class EventService {

  constructor(private _customHttpService: CustomHttpService) {
  }

  addEvent(event: string): Observable<ResponseVO<string>> {
    const url = 'api/endpoint';
    const body: string = JSON.stringify(event);
    return this._customHttpService.post(url, body);
  }

  updateEvent(event: string): Observable<ResponseVO<string>> {
    const url = 'api/endpoint';
    const body: string = JSON.stringify(event);
    return this._customHttpService.post(url, body);
  }

  getAllEventList(requestEventVO: RequestVO<EventVO>): Observable<EventVO> {
    const url = 'api/endpoint';
    const body: string = JSON.stringify(requestEventVO);
    return this._customHttpService.post(url, body);
  }


  deleteEvent(requestEventVO: RequestVO<EventVO[]>): Observable<ResponseVO<number>> {
    const url = 'api/endpoint';
    const body: string = JSON.stringify(requestEventVO);
    return this._customHttpService.post(url, body);
  }

  getEventById(eventVO: EventVO): Observable<ResponseVO<EventVO>> {
    const url = 'http://localhost:8080/MyApp/MyApp2';
    const body: string = JSON.stringify(eventVO);
    return this._customHttpService.post(url, body);
  }
  getEventById2(eventVO: EventVO): Observable<ResponseVO<EventVO>> {
    const url = 'http://localhost:8080/MyApp/MyApp';
    const body: string = JSON.stringify(eventVO);
    return this._customHttpService.get(url);
  }
}
