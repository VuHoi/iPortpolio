import { Component, HostListener, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { SharedService } from 'src/app/shares/SharedService';
import { Subject, interval, of } from 'rxjs';
import { startWith, takeUntil, switchMap, tap, debounceTime, distinctUntilChanged, filter, take, mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
// import { Numbertest2 } from 'src/app/models/test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnDestroy {
  title = 'app';
  //   @HostListener('window:beforeunload', ['$event'])
  //   public beforeunloadHandler($event) {
  //   $event.returnValue = 'Are you sure?';
  //  }
  private _destroySubject = new Subject<void>();
  isloading = false;
  constructor(private shareService: SharedService,
    private userService: UserService) {
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
    this.testInterval();
  }
  testInterval() {
    interval(2000).pipe(
      startWith(0),
      debounceTime(1000),
      distinctUntilChanged(),
      takeUntil(this._destroySubject),
      switchMap(() => this.userService.getAllUser().pipe(
        mergeMap((data: any[]) => of(...data).pipe(
          take(3),
          tap(data1 => console.log(data1))
        ))
      ))
    ).subscribe();
    // this.userService.getAllUser().pipe(
    //   mergeMap((data: any[]) => of(...data).pipe(
    //     take(3),
    //     tap(data1 => console.log(data1))
    //   ))
    // ).subscribe();
  }
  ngOnDestroy() {
    this._destroySubject.next();
  }
}

