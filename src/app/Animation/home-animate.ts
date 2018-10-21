import {  animate, animation, style, keyframes } from '@angular/animations';


export let HomeEnter = animation(
  animate('2000ms cubic-bezier(.34,.89,.74,.78)', keyframes([
    style({ opacity: 0, transform: 'translateY(200px)', offset: 0 }),
    style({ opacity: 1, transform: 'translateY(0px)', offset: 0.5 }),
  ])));

export let HomeLeave = animation(
  animate('2000ms ease-out', keyframes([
    style({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
    style({ opacity: 0, transform: 'translateY(200px)', offset: 0.5 }),
  ])));
