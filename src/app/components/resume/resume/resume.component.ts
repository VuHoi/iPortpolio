import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProgressbarConfig } from 'ngx-bootstrap';
import { transition, trigger, useAnimation } from '@angular/animations';
import { ResumeEnter, ResumeLeave, ShakeImageEnter, ShakeImageLeave, RotateIn } from '../../Animation/resume-animate';
import { Portfolio } from 'src/app/models/portfolio';
import { SharedService } from 'src/app/shares/SharedService';
import { UserResponse } from 'src/app/models/UserResponse';
import { UserService } from 'src/app/services/user.service';
import { ToastService } from '../../toast/toast.service';
export function getProgressbarConfig(): ProgressbarConfig {
  return Object.assign(new ProgressbarConfig(), { animate: true, striped: true, max: 100 });
}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  providers: [{ provide: ProgressbarConfig, useFactory: getProgressbarConfig }],
  animations: [
    trigger('Resume', [
      transition(':enter', [
        useAnimation(ResumeEnter)
      ]), transition(':leave', [
        useAnimation(ResumeLeave)
      ])
    ]),
    trigger('Shake', [
      transition('leave=>enter', [
        useAnimation(ShakeImageEnter)
      ]), transition('enter=>leave', [
        useAnimation(ShakeImageLeave)
      ])
    ]),
    trigger('Rotate', [
      transition(':enter', [
        useAnimation(RotateIn)
      ]), transition(':leave', [
        useAnimation(RotateIn)
      ])
    ])
  ]
})

export class ResumeComponent implements OnInit {
  stateHover = 'leave';
  @Input() info: Portfolio;
  @Input()avatar: String;
  @Output() infoChange = new EventEmitter();
  user: UserResponse;

  isModify = false;
  constructor(
    private sharedService: SharedService,
    private userService: UserService,
    private toastService: ToastService
  ) {
    this.sharedService.getMessage().subscribe(data => this.isModify = data);
    this.userService.getCurrentUser().subscribe(user => this.user = user);
  }

  ngOnInit() {
  }
  togleStateAnimation(state) {
    this.stateHover = state;
  }
  changeValueInput() {
    this.infoChange.emit(this.info);
  }
  loadImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      // tslint:disable-next-line:prefer-const
      let reader = new FileReader();
      reader.onload = (eventLoader: any) => {
        this.avatar = eventLoader.target.result;
        this.userService.changeImage(this.user.id, eventLoader.target.result).subscribe((data) =>
          this.toastService.show({
            text: `Congratulations \n Upload image success`,
            type: 'success',
          })
        );
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
