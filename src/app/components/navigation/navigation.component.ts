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
    this.name = localStorage.getItem('baseurl') ? localStorage.getItem('baseurl') : this.name;
    this.router.events.subscribe((param: any) =>
      this.isShow = param.url ? param.url === '/login' || param.url === '/register' : this.isShow);
  }

  active = '';
  name = '';
  ngOnInit() {
  }

  ActivedRoute = (state) => {
    this.active = state;
    this.name = localStorage.getItem('baseurl') ? localStorage.getItem('baseurl') : this.name;
    this.router.navigate([this.name, state]);
  }
}
