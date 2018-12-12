import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
  username = '';
  canModify = true;
  currentUser: UserResponse;
  constructor(
    public titleService: Title,
    private route: ActivatedRoute,
    private portfolio: PortfolioService,
    private sharedService: SharedService,
    private userService: UserService) {
    this.username = this.route.snapshot.paramMap.get('name');
    localStorage.setItem('baseurl', this.username);
    this.home = {
      university: { param1: '', param2: '' },
      hobbies: { param1: '', param2: '' },
      hometown: { param1: '', param2: '' },
      name: '',
      skill_summary: { param1: '', param2: '', param3: '' },
      slug: this.username,
      userId: '',
      whoIam: { param1: '', param2: '', param3: '' }
    };
    this.userService.getCurrentUser().subscribe(user => {
      if (user) {
        if (this.username !== user.username) {
          this.sharedService.clearMessage();
        }
      }
    });
    this.portfolio.getHomeDataByName(this.username).subscribe((data: Home) => {
      this.canModify = data ? true : false;
      this.home = data ? data : this.home;
      titleService.setTitle(`${data ? data.name : this.username} - Home`);
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
