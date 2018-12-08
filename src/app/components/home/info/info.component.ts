import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {ButtonEnter, ButtonLeave, HomeEnter, HomeLeave} from '../../Animation/home-animate';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations: [
    trigger('Home', [
      transition(':enter', [
        useAnimation(HomeEnter)
      ]),
      transition(':leave', [
        useAnimation(HomeLeave)
      ])
    ])
  ]
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
