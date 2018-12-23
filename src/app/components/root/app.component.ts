import { Component, HostListener, OnInit, OnChanges } from '@angular/core';
import { SharedService } from 'src/app/shares/SharedService';
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

  isloading = false;
  constructor(private shareService: SharedService) {
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


}

