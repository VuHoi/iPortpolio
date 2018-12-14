import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { ContactEnter, ContactLeave } from '../../Animation/contact-animate';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
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
  username = '';
  contact: Contact = {
    email: '',
    message: '',
    name: '',
    subject: ''
  };
  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30)
    ]),
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(100)
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(300)
    ])
  });
  constructor(
    public titleService: Title,
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {
    this.username = this.route.snapshot.paramMap.get('name');
    localStorage.setItem('baseurl', this.username);
    titleService.setTitle(`${this.username} - Resume`);
  }
  get getName() {
    return this.contactForm.get('name');
  }
  get getEmail() {
    return this.contactForm.get('email');
  }
  get getSubject() {
    return this.contactForm.get('subject');
  }
  get getMessage() {
    return this.contactForm.get('message');
  }
  submitContact() {
    this.contactService.postContact(this.contact, this.username).subscribe(data => this.router.navigate([this.username, 'home']));
  }
  ngOnInit() {
  }

}
