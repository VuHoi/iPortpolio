import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-container-resume',
  templateUrl: './container-resume.component.html',
  styleUrls: ['./container-resume.component.css']
})
export class ContainerResumeComponent implements OnInit {

  constructor(public titleService: Title) {
    titleService.setTitle('iPortpolio(Resume)');
  }

  ngOnInit() {
  }

}
