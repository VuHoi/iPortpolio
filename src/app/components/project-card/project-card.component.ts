import {Component, Input, OnInit} from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {CardProjectEnter, CardHoverEnter, CardHoverLeave, CardLeave} from '../Animation/card-animate';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  animations: [
    trigger('Card', [
      transition(':enter', [
        useAnimation(CardProjectEnter)
      ]), transition(':leave', [
        useAnimation(CardLeave)
      ])
    ]),
    trigger('CardHover', [
      transition('enter=>leave', [
        useAnimation(CardHoverLeave)
      ]), transition('leave=>enter', [
        useAnimation(CardHoverEnter)
      ])
    ])
  ]
})
export class ProjectCardComponent implements OnInit {
  @Input()title: string ;
  @Input()first_paragraph: string ;
  @Input()second_paragraph: string ;
  @Input()icons: any [] ;
  stateHover = 'leave';
  constructor() { }

  ngOnInit() {
  }
  togleStateAnimation(state) {
    this.stateHover = state;
  }
}
