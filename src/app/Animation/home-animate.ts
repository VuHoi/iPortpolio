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


export let ButtonEnter = animation(
  animate('1000ms ease-in', keyframes([
    style({  transform: 'scale(0.7)', offset: 0 }),
    style({  transform: 'scale(1)', offset: 0.5 }),
  ])));

export let ButtonLeave = animation(
  animate('1000ms 500ms' , keyframes([
    style({  transform: 'scale(1.5)', offset: 0 }),
    style({  transform: 'scale(1)', offset: 0.5 }),
  ])));
