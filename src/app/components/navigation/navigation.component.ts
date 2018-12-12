import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shares/SharedService';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isShow: boolean;
  logged = true;
  constructor(
    private router: Router,
    private shareService: SharedService) {
    this.name = localStorage.getItem('baseurl') ? localStorage.getItem('baseurl') : this.name;
    this.router.events.subscribe((param: any) =>
      this.isShow = param.url ? param.url === '/login' || param.url === '/register' : this.isShow);
    this.shareService.getMessage().subscribe(data => this.logged = data != null ? true : false);
  }

  active = '';
  name = '';
  isModify = false;
  ngOnInit() {
  }

  ActivedRoute = (state) => {
    this.active = state;
    this.name = localStorage.getItem('baseurl') ? localStorage.getItem('baseurl') : this.name;
    this.router.navigate([this.name, state]);
  }
  modifyPortfolio() {
    this.isModify = !this.isModify;
    this.shareService.sendMessage(this.isModify);
  }
}
