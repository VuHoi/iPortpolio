import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
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
  ngOnInit() {
  }

}
