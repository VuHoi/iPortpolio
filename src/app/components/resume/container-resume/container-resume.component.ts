import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Portfolio } from 'src/app/models/portfolio';
import { SharedService } from 'src/app/shares/SharedService';
import { UserService } from 'src/app/services/user.service';
import { UserResponse } from 'src/app/models/UserResponse';
@Component({
  selector: 'app-container-resume',
  templateUrl: './container-resume.component.html',
  styleUrls: ['./container-resume.component.css']
})
export class ContainerResumeComponent implements OnInit {
  info: Portfolio;
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
    this.info = {
      address: '',
      department: '',
      education: [{ name: '', duration: '', position: '' }],
      email: '',
      experiences: [{ position: [''], duration: '', name: '', address: '', discription: '' }],
      expertise: [''],
      name: '',
      otherLink: '',
      phone: '',
      profile: '',
      skills: [{ title: '', process: 0 }],
      slug: '',
      userId: '',
      projects: [
        { name: '', param1: '', param2: '', icons: [''] },
        { name: '', param1: '', param2: '', icons: [''] },
        { name: '', param1: '', param2: '', icons: [''] },
        { name: '', param1: '', param2: '', icons: [''] }
      ]
    };
    this.userService.getCurrentUser().subscribe(user => {
      if (user) {
        if (this.username !== user.username) {
          this.sharedService.clearMessage();
        }
      }
    }, () => this.sharedService.clearMessage());
    this.portfolio.getResumeDataByName(this.username).subscribe((data: Portfolio) => {
      this.canModify = data ? true : false;
      this.info = data ? data : this.info;
      titleService.setTitle(`${data.name} - Resume`);
    });
    this.sharedService.getMessage().subscribe(data => {
      console.log(this.info);
      if (!data && data != null) {
        if (this.canModify) {
          this.portfolio.putPortfolioData(this.info).subscribe(() => console.log('Modify success'), () => console.log('Modify Fail'));
        } else {
          this.portfolio.postPortfolioData(this.info).subscribe(() => console.log('Post success'), () => console.log('Post Fail'));
        }
      }
    });
  }


  ngOnInit() {
  }

}
