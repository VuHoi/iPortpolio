import {  animate, animation, style, keyframes } from '@angular/animations';


export let ResumeEnter = animation(
  animate('2500ms cubic-bezier(.34,.89,.74,.78)', keyframes([
    style({ transform: 'translateY(-500px)', offset: 0 }),
    style({  transform: 'translateY(0px)', offset: 0.5 }),
  ])));

export let ResumeLeave = animation(
  animate('2000ms ease-out', keyframes([
    style({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
    style({ opacity: 0, transform: 'translateY(-200px)', offset: 0.5 })
    ])));
