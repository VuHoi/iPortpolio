import { Component, OnInit } from '@angular/core';
import { ProgressbarConfig } from 'ngx-bootstrap';
import {transition, trigger, useAnimation} from '@angular/animations';
import {ResumeEnter, ResumeLeave} from '../../Animation/resume-animate';
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
    ])
  ]
})

export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
