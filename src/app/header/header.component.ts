import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ck-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input()
  skillsList: string[];

  constructor() {
    this.skillsList = ['HTML and CSS', 'JavaScript', 'Swift', 'PHP', 'Symfony Framework',
      'Java', 'C++', 'Unix and Linux', 'Angular 4', 'Git'];
  }

  ngOnInit() {
  }

}
