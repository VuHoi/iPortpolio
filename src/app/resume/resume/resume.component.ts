import { Component, OnInit } from '@angular/core';
import { ProgressbarConfig } from 'ngx-bootstrap';
export function getProgressbarConfig(): ProgressbarConfig {
  return Object.assign(new ProgressbarConfig(), { animate: true, striped: true,  max: 100 });
}
@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }]
})

export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
