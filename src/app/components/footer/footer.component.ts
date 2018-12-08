import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { JelloAnimateEnter } from '../Animation/footer-animate';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('jello', [
      transition('enter=>leave', [
      ]),
      transition('leave=>enter', [
        useAnimation(JelloAnimateEnter)
      ])
    ])
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }
  stateHover = 'leave';
  stateHoverFb = 'leave';
  stateHoverIn = 'leave';
  stateHoverTw = 'leave';
  ngOnInit() {
  }
  togleStateAnimation(state) {
    this.stateHover = state;
  }
  togleStateAnimationFb(state) {
    this.stateHoverFb = state;
  }
  togleStateAnimationIn(state) {
    this.stateHoverIn = state;
  }
  togleStateAnimationTw(state) {
    this.stateHoverTw = state;

  }


}
