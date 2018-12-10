import { Component, OnInit, Input } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { HomeEnter, HomeLeave } from '../../Animation/home-animate';
import { Home } from 'src/app/models/home';

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
  @Input() home: Home;
  ngOnInit() {
  }

}
