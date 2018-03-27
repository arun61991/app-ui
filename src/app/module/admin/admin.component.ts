import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
    selector   : 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls  : ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    constructor(private router: Router) {

    }

    ngOnInit() {

    }
    logOut() {
        this.router.navigate(['home']);
    }
}
