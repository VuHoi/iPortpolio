import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {ContactEnter, ContactLeave} from '../../Animation/contact-animate';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  animations: [
    trigger('Contact', [
      transition(':enter', [
        useAnimation(ContactEnter)
      ]), transition(':leave', [
        useAnimation(ContactLeave)
      ])
    ])
  ]
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
