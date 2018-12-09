import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public titleService: Title, private route: ActivatedRoute) {
    this.username = this.route.snapshot.paramMap.get('name');
    localStorage.setItem('baseurl', this.username);
    titleService.setTitle(`${this.username} - Contact`);
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
