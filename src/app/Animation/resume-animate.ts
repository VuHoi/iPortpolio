import {  animate, animation, style, keyframes } from '@angular/animations';


export let ResumeEnter = animation(
  animate('2500ms cubic-bezier(.01,.69,.44,.96)', keyframes([
    style({ transform: 'translateY(-500px)', offset: 0 }),
    style({  transform: 'translateY(0px)', offset: 0.5 }),
  ])));

export let ResumeLeave = animation(
  animate('2000ms ease-out', keyframes([
    style({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
    style({ opacity: 0, transform: 'translateY(-200px)', offset: 0.5 })
    ])));

export let ShakeImageEnter = animation(
  animate('1000ms ease-in', keyframes([
    style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    style({  transform: 'translate3d(-10px, 0, 0)', offset: 0.1 }),
    style({  transform: 'translate3d(10px, 0, 0)', offset: 0.2 }),
    style({  transform: 'translate3d(-10px, 0, 0)', offset: 0.3 }),
    style({  transform: 'translate3d(10px, 0, 0)', offset: 0.4 }),
    style({  transform: 'translate3d(-10px, 0, 0)', offset: 0.5 }),
    style({  transform: 'translate3d(10px, 0, 0)', offset: 0.6 }),
    style({  transform: 'translate3d(-10px, 0, 0)', offset: 0.7 }),
    style({  transform: 'translate3d(10px, 0, 0)', offset: 0.8 }),
    style({  transform: 'translate3d(-10px, 0, 0)', offset: 0.9 }),
  ])));

export let ShakeImageLeave = animation(
  animate('1000ms ease-out', keyframes([
    style({ opacity: 1,  offset: 0 }),
    style({ opacity: 0, offset: 0.25 }),
    style({ opacity: 1,  offset: 0.5 }),
    style({ opacity: 0, offset: 0.75 })
  ])));
