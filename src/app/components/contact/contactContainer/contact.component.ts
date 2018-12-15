import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';
import { SharedService } from 'src/app/shares/SharedService';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    public titleService: Title,
     private route: ActivatedRoute,
     private sharedService: SharedService,
     private userService: UserService) {
    this.username = this.route.snapshot.paramMap.get('name');
    localStorage.setItem('baseurl', this.username);
    titleService.setTitle(`${this.username} - Contact`);
    this.userService.getCurrentUser().subscribe(user => {
      if (user) {
        if (this.username !== user.username) {
          this.sharedService.clearMessage();
        }
      }
    }, () => this.sharedService.clearMessage());
  }
  cardOne = {
    title: '',
    first_paragraph: '',
    second_paragraph: ''
  };
  cardTwo = {
    title: '',
    first_paragraph: '',
    second_paragraph: ''
  };

  cardThree = {
    title: '',
    first_paragraph: '',
    second_paragraph: ''
  };
  username  = '';
  ngOnInit() {
  }

}
