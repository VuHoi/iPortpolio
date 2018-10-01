import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  cardOne = {
    title: 'University',
    first_paragraph: '',
    second_paragraph: ''
  };
  cardTwo = {
    title: 'Hometown',
    first_paragraph: '',
    second_paragraph: ''
  }

  cardThree = {
    title: 'Hobbies',
    first_paragraph: '',
    second_paragraph: ''
  }
  ngOnInit() {
  }

}
