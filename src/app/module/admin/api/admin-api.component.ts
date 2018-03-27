import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../../../services/event.service';
import { EventVO } from '../../../shared/vo/EventVO';
import { RequestVO } from '../../../shared/vo/RequestVO';

@Component({
    selector   : 'app-admin-api',
    templateUrl: './admin-api.component.html',
    styleUrls  : ['./admin-api.component.css']
})
export class AdminApiComponent implements OnInit {

    constructor(private _eventService: EventService) {
        this.getEventById();
        this.getAllEventList();
    }

    ngOnInit() {

    }

    getEventById() {
    const envetVo: EventVO = <any>{};
    envetVo.id = 1;
    envetVo.name = 'aaa';
    this._eventService.getEventById(envetVo).subscribe(
        data => {
          if (data.statusCode === '500') {
            console.log(data.valueObject);
          }
        },
        err => {
            console.log(err);
        }
      );
    }
    getAllEventList() {
        const requestEventVO: RequestVO<EventVO> = <any>{};
        this._eventService.getAllEventList(requestEventVO).subscribe(
            data => {
                console.log(data);
            },
            err => {
                console.log(err);
            }
          );
    }

}
