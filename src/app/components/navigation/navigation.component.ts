import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  url: String;
  constructor(private router: Router) {
    this.router.events.subscribe((route: any) => this.url = route.url?route.url:this.url);
  }

  active = '';

  ngOnInit() {
  }

  ActivedRoute = (state) => {
    this.active = state;
  }
}
