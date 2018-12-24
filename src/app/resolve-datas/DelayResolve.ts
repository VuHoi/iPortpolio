import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { delay, finalize } from 'rxjs/operators';
import { SharedService } from '../shares/SharedService';
import { UserService } from '../services/user.service';
import { Title } from '@angular/platform-browser';
import { ToastService } from '../components/toast/toast.service';
@Injectable()
export class DelayResolve implements Resolve<Observable<any>> {
  constructor(private sharedService: SharedService,
    public titleService: Title,
    private userService: UserService,
    private router: Router,
    private toastService: ToastService) {
  }
  username = '';
  resolve(route: ActivatedRouteSnapshot): any {
    this.sharedService.sendMessageLoading(true);
    this.username = route.paramMap.get('name');
    this.titleService.setTitle(`${this.username ? this.userService + ' - ' : ''}  ${route.data.title}`);
    if (this.username) {
      this.userService.checkUserExiting(this.username).subscribe((data: any) => {
        if (!data.status) {
          this.router.navigate(['/notfound']);
          this.toastService.show({
            text: `Unfortunately! \n ${this.username} \n not exiting`,
            type: 'warning',
          });
        }
      });
    }
    this.sharedService.sendMessageRoute(this.username);
    this.userService.getCurrentUser().subscribe(user => {
      if (user) {
        if (this.username !== user.username) {
          this.sharedService.clearMessage();
        }
      }
    }, () => this.sharedService.clearMessage());
    return of(null).pipe(
      delay(1000),
      finalize(() => {
        this.sharedService.clearMessageLoading();
        this.toastService.show({
          text: `Welcome to \n ${route.data.title}`,
          type: 'success',
        });
      }));
  }
}
