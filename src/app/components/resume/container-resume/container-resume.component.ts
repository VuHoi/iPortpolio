import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Portfolio } from 'src/app/models/portfolio';
@Component({
  selector: 'app-container-resume',
  templateUrl: './container-resume.component.html',
  styleUrls: ['./container-resume.component.css']
})
export class ContainerResumeComponent implements OnInit {
  info: Portfolio;
  constructor(
    public titleService: Title,
    private route: ActivatedRoute,
    private portfolio: PortfolioService) {
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
      userId: ''
    };
    this.portfolio.getResumeDataByName(this.username).subscribe((data: Portfolio) => {
      titleService.setTitle(`${data.name} - Resume`);
      this.info = data;
    });
  }

  projectOne = {
    title: 'Ishop',
    first_paragraph: 'It is a  E-commerce  website that I make a year ago.' +
      'It was my first website when I decided to switch from major' +
      ' to programming software through website programming.' +
      ' I started with the front end as angular 4. It requires' +
      ' me to learn a lot of background knowledge of a front end ' +
      'developer such as html css javascript. I have learned very ' +
      'seriously to overcome this difficulty. And in this website' +
      ' I just stop being a front end developer and get involved ' +
      'in design database work with the back end',
    second_paragraph: 'On this site I use angular4, ASP.net core 2.0, Entity framework core' +
      ' , bootstrap 4 ',
    icons: [
      'devicon-csharp-plain',
      'devicon-angularjs-plain',
      'devicon-bootstrap-plain',
      'devicon-webpack-plain',
      'devicon-html5-plain',
      'devicon-css3-plain',
      'devicon-git-plain '
    ]
  };
  username = '';
  ngOnInit() {
  }

}
