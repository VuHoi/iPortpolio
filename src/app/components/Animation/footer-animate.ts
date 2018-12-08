import {  animate, animation, style, keyframes } from '@angular/animations';

export let JelloAnimateEnter = animation(
    animate('1000ms ease-in', keyframes([
      style({ transform: 'translate3d(0, 0, 0)', offset: 0.111 }),
      style({  transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222 }),
      style({  transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 }),
      style({  transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 }),
      style({  transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 }),
      style({  transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 }),
      style({  transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 }),
      style({  transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.888 }),
    ])));
  


  export let ShakeImageLeave = animation(
    animate('1000ms ease-out', keyframes([
      style({ opacity: 1,  offset: 0 }),
      style({ opacity: 0, offset: 0.25 }),
      style({ opacity: 1,  offset: 0.5 }),
      style({ opacity: 0, offset: 0.75 })
    ])));

