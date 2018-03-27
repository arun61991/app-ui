import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
    selector   : 'app-login',
    templateUrl: './login.component.html',
    styleUrls  : ['./login.component.css']
})
export class AppLoginComponent implements OnInit {

    constructor(private router: Router) {

    }

    ngOnInit() {
    }
    loginFormSubmit() {
        this.router.navigate(['/admin']);
    }
}



