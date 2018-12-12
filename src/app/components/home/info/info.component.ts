import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { HomeEnter, HomeLeave } from '../../Animation/home-animate';
import { Home } from 'src/app/models/home';
import { SharedService } from 'src/app/shares/SharedService';

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
  isModify = false;
  constructor(private shareService: SharedService) {
    this.shareService.getMessage().subscribe(data => this.isModify = data);
   }
  @Input() home: Home;
  @Output() infoChange = new EventEmitter();
  changeValueInput() {
    this.infoChange.emit(this.home);
  }
  ngOnInit() {
  }

}
