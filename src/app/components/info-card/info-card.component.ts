import {Component, Input, OnInit} from '@angular/core';
import {CardEnter, CardLeave, CardHoverEnter , CardHoverLeave } from '../Animation/card-animate';
import {transition, trigger, useAnimation} from '@angular/animations';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css'],
  animations: [
    trigger('Card', [
      transition(':enter', [
        useAnimation(CardEnter)
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
export class InfoCardComponent implements OnInit {
  @Input() title: string;
  @Input() first_paragraph: string;
  @Input() second_paragraph: string;
  stateHover = 'leave';
  constructor() {
  }

  ngOnInit() {
  }

  togleStateAnimation(state) {
    this.stateHover = state;
  }
}
