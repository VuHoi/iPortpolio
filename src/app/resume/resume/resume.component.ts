import { Component, OnInit } from '@angular/core';
import { ProgressbarConfig } from 'ngx-bootstrap';
import {transition, trigger, useAnimation} from '@angular/animations';
import {ResumeEnter, ResumeLeave, ShakeImageEnter , ShakeImageLeave} from '../../Animation/resume-animate';
export function getProgressbarConfig(): ProgressbarConfig {
  return Object.assign(new ProgressbarConfig(), { animate: true, striped: true,  max: 100 });
}
@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }],
  animations: [
    trigger('Resume', [
      transition(':enter', [
        useAnimation(ResumeEnter)
      ]), transition(':leave', [
        useAnimation(ResumeLeave)
      ])
    ]),
    trigger('Shake', [
      transition('leave=>enter', [
        useAnimation(ShakeImageEnter)
      ]), transition('enter=>leave', [
        useAnimation(ShakeImageLeave)
      ])
    ])
  ]
})

export class ResumeComponent implements OnInit {
  stateHover = 'leave';
  constructor() { }

  ngOnInit() {
  }
  togleStateAnimation(state) {
    this.stateHover = state;
  }
}
