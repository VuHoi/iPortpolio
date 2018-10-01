import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() {
  }

  active = 'home';

  ngOnInit() {
  }

  ActivedRoute = (state) => {
    this.active = state ;
  }
}
