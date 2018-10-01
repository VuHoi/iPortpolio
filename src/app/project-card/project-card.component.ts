import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input()title: string ;
  @Input()first_paragraph: string ;
  @Input()second_paragraph: string ;
  @Input()icons: any [] ;
  constructor() { }

  ngOnInit() {
  }

}
