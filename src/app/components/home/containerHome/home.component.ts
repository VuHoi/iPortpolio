import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Home } from 'src/app/models/home';
import { SharedService } from 'src/app/shares/SharedService';
import { UserService } from 'src/app/services/user.service';
import { UserResponse } from 'src/app/models/UserResponse';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home: Home;
  canModify = true;
  constructor(
    private route: ActivatedRoute,
    private portfolio: PortfolioService,
    private sharedService: SharedService) {
    this.route.data.subscribe((data: any) => {
      this.canModify = data.home.status;
      this.home = data.home;
    });
    this.sharedService.getMessage().subscribe(data => {
      if (!data && data != null) {
        if (this.canModify) {
          this.portfolio.putHomeData(this.home).subscribe(() => console.log('Modify success'), () => console.log('Modify Fail'));
        } else {
          this.portfolio.postHomeData(this.home).subscribe(() => console.log('Post success'), () => console.log('Post Fail'));
        }
      }
    });
  }
  ngOnInit() {
  }
}
