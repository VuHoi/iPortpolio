import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CardEnter, CardLeave, CardHoverEnter, CardHoverLeave } from '../Animation/card-animate';
import { transition, trigger, useAnimation } from '@angular/animations';
import { SharedService } from 'src/app/shares/SharedService';
import { Info } from 'src/app/models/info';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css'],
  animations: [
    trigger('Card', [
      transition(':enter', [
        useAnimation(CardEnter)
      ]), transition(':leave', [
        useAnimation(CardLeave)
      ])
    ]),
    trigger('CardHover', [
      transition('enter=>leave', [
        useAnimation(CardHoverLeave)
      ]), transition('leave=>enter', [
        useAnimation(CardHoverEnter)
      ])
    ])
  ]
})
export class InfoCardComponent implements OnInit {
  @Input() title: string;
  @Input() info: Info;
  @Output() infoChange = new EventEmitter();
  isModify = false;
  stateHover = 'leave';
  constructor(private shareService: SharedService) {
    this.shareService.getMessage().subscribe(data => this.isModify = data);
  }

  ngOnInit() {
  }
  changeValueInput() {
    this.infoChange.emit(this.info);
  }
  togleStateAnimation(state) {
    this.stateHover = state;
  }
}
