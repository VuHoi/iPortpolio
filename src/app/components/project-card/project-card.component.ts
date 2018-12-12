import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { CardProjectEnter, CardHoverEnter, CardHoverLeave, CardLeave } from '../Animation/card-animate';
import { Project } from 'src/app/models/project';
import { SharedService } from 'src/app/shares/SharedService';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  animations: [
    trigger('Card', [
      transition(':enter', [
        useAnimation(CardProjectEnter)
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
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;
  @Output() infoChange = new EventEmitter();
  isModify = false;
  stateHover = 'leave';
  constructor(private sharedService: SharedService) {
    this.sharedService.getMessage().subscribe(data => this.isModify = data);
  }

  ngOnInit() {
  }
  togleStateAnimation(state) {
    this.stateHover = state;
  }
  changeValueInput() {
    this.infoChange.emit(this.project);
  }
}
