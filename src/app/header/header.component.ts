import {Component, Input, OnInit, AfterViewInit} from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'ck-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @Input()
  skillsList: string[];

  constructor() {
    this.skillsList = ['HTML and CSS', 'JavaScript', 'Swift', 'PHP', 'Symfony Framework',
      'Java', 'C++', 'Unix and Linux', 'Angular 4', 'Git'];
  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    anime.timeline({loop: false})
      .add({
        targets: '.name, .word',
        scale: [14, 1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 1000,
        delay: 1000
      }) .add({
      targets: '#aboutMe',
      scale: [14, 1],
      opacity: [0,1],
      easing: "easeOutCirc",
      duration: 1000,
    }) .add({
      targets: '#projects',
      scale: [14, 1],
      opacity: [0,1],
      easing: "easeOutCirc",
      duration: 1000,
    });
  }


}
