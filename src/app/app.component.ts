import {Component, Input} from '@angular/core';


import { OnInit } from "@angular/core";

@Component({
  selector: 'ck-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  @Input()
  skillsList: string[];

  constructor() {

  }

  ngOnInit(){

  }


}
