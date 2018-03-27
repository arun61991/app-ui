import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PATH_CONSTANTS } from './core/PathConstants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {


  }

}
