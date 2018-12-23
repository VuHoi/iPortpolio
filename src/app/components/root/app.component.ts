import { Component, HostListener, OnInit, OnChanges } from '@angular/core';
import { SharedService } from 'src/app/shares/SharedService';
import { ToastService } from '../toast/toast.service';
// import { Numbertest2 } from 'src/app/models/test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  //   @HostListener('window:beforeunload', ['$event'])
  //   public beforeunloadHandler($event) {
  //   $event.returnValue = 'Are you sure?';
  //  }
  private count = 1;
  isloading = false;
  constructor(private shareService: SharedService, private toastService: ToastService) {
    // function* infiniteSequence() {
    //   var i = 0;
    //   while (a < 10) {
    //     yield i++;
    //   }
    // }
    // // tslint:disable-next-line:prefer-const
    // var iterator = infiniteSequence();
    // var a = 0;
    // while (a < 10) {
    //   console.log(iterator.next()); // { value: xxxx, done: false } forever and ever
    //   a++;
    // }
    this.shareService.getMessageLoading().subscribe(loading => this.isloading = loading);

  }

  showToast() {
    this.toastService.show({
      text: `Toast message ${this.count}`,
      type: 'success',
    });

    this.count += 1;
  }
}

