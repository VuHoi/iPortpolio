import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.css']
})
export class MobileNavigationComponent implements OnInit {
  name: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.name = this.activatedRoute.snapshot.params.name;
   }

  ngOnInit() {
  }

  ActivedRoute = (state) => {
    // this.active = state;
    this.router.navigate([this.name, state]);
    // this.isModify = false;
  }

}
