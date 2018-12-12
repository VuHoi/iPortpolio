import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Home } from 'src/app/models/home';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home: Home;
  username = '';
  constructor(
    public titleService: Title,
    private route: ActivatedRoute,
    private portfolio: PortfolioService) {
    this.username = this.route.snapshot.paramMap.get('name');
    localStorage.setItem('baseurl', this.username);
    this.home = {
      university: { param1: '', param2: '' },
      hobbies: { param1: '', param2: '' },
      hometown: { param1: '', param2: '' },
      name: '',
      skill_summary: { param1: '', param2: '', param3: '' },
      slug: '',
      userId: '',
      whoIam: { param1: '', param2: '', param3: '' }
    };
    this.portfolio.getHomeDataByName(this.username).subscribe((data: Home) => {
      this.home = data;
      titleService.setTitle(`${data.name} - Home`);
    });
  }
  ngOnInit() {
  }
  test() {
    console.log(this.home);
  }
}
