import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ck-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input()
  skillsList: string[];

  constructor() { }

  ngOnInit() {
  }

}
