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
    this.shareService.getMessageRoute().subscribe(route => this.name = route);
    this.router.events.subscribe((param: any) =>
      this.isShow = param.url ? param.url === '/login' || param.url === '/register' || param.url === '/notfound' : this.isShow);
    this.shareService.getMessage().subscribe(data => this.logged = data != null ? true : false);
  }

  active = '';
  name = '';
  isModify = false;
  ngOnInit() {
  }

  ActivedRoute = (state) => {
    this.active = state;
    this.router.navigate([this.name, state]);
    this.isModify = false;
  }
  modifyPortfolio() {
    this.isModify = !this.isModify;
    this.shareService.sendMessage(this.isModify);
  }
}
