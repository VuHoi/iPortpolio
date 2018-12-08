import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isShow: boolean;
  constructor(private router: Router) {
    // tslint:disable-next-line:max-line-length
    this.router.events.subscribe((route: any) => this.isShow = route.url ? route.url === '/login' || route.url === '/register' : this.isShow);
  }

  active = '';

  ngOnInit() {
  }

  ActivedRoute = (state) => {
    this.active = state;
  }
}
