import { Component, OnInit, Input } from '@angular/core';
import { ProgressbarConfig } from 'ngx-bootstrap';
import { transition, trigger, useAnimation } from '@angular/animations';
import { ResumeEnter, ResumeLeave, ShakeImageEnter, ShakeImageLeave, RotateIn } from '../../Animation/resume-animate';
import { Portfolio } from 'src/app/models/portfolio';
export function getProgressbarConfig(): ProgressbarConfig {
  return Object.assign(new ProgressbarConfig(), { animate: true, striped: true, max: 100 });
}
@Component({
  // tslint:disable-next-line:component-selector
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
    ]),
    trigger('Rotate', [
      transition(':enter', [
        useAnimation(RotateIn)
      ]), transition(':leave', [
        useAnimation(RotateIn)
      ])
    ])
  ]
})

export class ResumeComponent implements OnInit {
  stateHover = 'leave';
  @Input() info: Portfolio;
  constructor() { }

  ngOnInit() {
  }
  togleStateAnimation(state) {
    this.stateHover = state;
  }
}
