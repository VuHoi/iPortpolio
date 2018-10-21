import {  animate, animation, style, keyframes } from '@angular/animations';


export let ContactEnter = animation(
  animate('2000ms cubic-bezier(.34,.89,.74,.78)', keyframes([
    style({ opacity: 0, transform: 'rotate(30deg)', transformOrigin: 'center bottom', offset: 0 }),
    style({ opacity: 1, transform: 'rotate(0deg)', offset: 0.5 }),
  ])));

export let ContactLeave = animation(
  animate('2000ms ease-out', keyframes([
    style({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
    style({ opacity: 0, transform: 'translateY(200px)', offset: 0.5 }),
  ])));
