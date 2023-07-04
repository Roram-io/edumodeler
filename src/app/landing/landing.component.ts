import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  ngOnInit(): void {
    localStorage.removeItem("XMLfile");
  }

  isVisible=true;

}
