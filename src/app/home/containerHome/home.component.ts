import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public titleService: Title) {
    titleService.setTitle('iPortpolio(Home)');
  }

  ngOnInit() {
  }

}
