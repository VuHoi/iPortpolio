import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {
  @Input()title: string ;
  @Input()first_paragraph: string ;
  @Input()second_paragraph: string ;
  constructor() { }

  ngOnInit() {
  }

}
