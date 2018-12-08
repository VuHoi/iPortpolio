import {  animate, animation, style, keyframes } from '@angular/animations';

export let CardLeave = animation(
  animate('2000ms ease-out', keyframes([
    style({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
    style({ opacity: 0, transform: 'translateY(-50px)', offset: 0.5 }),
  ])));

export let CardEnter = animation(
  animate('2000ms cubic-bezier(.34,.89,.74,.78)', keyframes([
    style({ opacity: 0, transform: 'translateY(-100px)', offset: 0 }),
    style({ opacity: 1, transform: 'translateY(0px)', offset: 0.5 }),
  ])));

export let CardHoverEnter = animation(
  animate('1000ms ease-in', keyframes([
    style({ opacity: 0,  transform: 'scale(0.7)' , offset: 0} ),
    style({ opacity: 1,  transform: 'scale(1)' , offset: 0.5} )
  ])));

export let CardHoverLeave = animation(
  animate('1000ms ease-out', keyframes([
    style({ opacity: 1, transform: 'scale(1)', offset: 0 }),
    style({ opacity: 0,  transform: 'scale(0.7)' , offset: 0.5} )
  ])));

export let CardProjectEnter = animation(
  animate('2000ms cubic-bezier(.34,.89,.74,.78)', keyframes([
    style({ opacity: 0, transform: 'translateY(300px)', offset: 0 }),
    style({ opacity: 1, transform: 'translateY(0px)', offset: 0.5 }),
  ])));
