import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { delay, finalize, map, catchError } from 'rxjs/operators';
import { SharedService } from '../shares/SharedService';
import { Home } from '../models/home';
import { PortfolioService } from '../services/portfolio.service';
import { Title } from '@angular/platform-browser';
import { UserService } from '../services/user.service';
import { ToastService } from '../components/toast/toast.service';
@Injectable()
export class HomeResolve implements Resolve<Observable<any>> {

    constructor(
        public titleService: Title,
        private sharedService: SharedService,
        private portfolio: PortfolioService,
        private userService: UserService,
        private router: Router,
        private toastService: ToastService
    ) {
    }
    username = '';
    checkUserExiting = false;
    resolve(route: ActivatedRouteSnapshot): any {
        this.sharedService.sendMessageLoading(true);
        this.username = route.paramMap.get('name');
        if (this.username) {
            this.userService.checkUserExiting(this.username).subscribe((data: any) => {
                this.checkUserExiting = data.status;
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
        const home: Home = {
            university: { param1: '', param2: '' },
            hobbies: { param1: '', param2: '' },
            hometown: { param1: '', param2: '' },
            name: '',
            skill_summary: { param1: '', param2: '', param3: '' },
            slug: this.username,
            userId: '',
            whoIam: { param1: '', param2: '', param3: '' }
        };
        this.userService.getCurrentUser().subscribe(user => {
            if (user) {
                if (this.username !== user.username) {
                    this.sharedService.clearMessage();
                }
            }
        }, () => this.sharedService.clearMessage());
        return this.portfolio.getHomeDataByName(this.username).pipe(
            delay(1000),
            map((data: Home) => {
                this.titleService.setTitle(`${data.name} - ${route.data.title}`);
                data.status = true;
                this.toastService.show({
                    text: `Hello! I'm \n ${data.name}`,
                    type: 'success',
                });
                return data;
            }),
            catchError(err => {
                home.status = false;
                this.titleService.setTitle(`${this.username} - ${route.data.title}`);
                if (this.checkUserExiting) {
                    this.toastService.show({
                        text: `Sorry! Data of \n ${this.username} \n not exiting `,
                        type: 'warning',
                    });
                }
                return of(home);
            }),
            finalize(() => {
                this.sharedService.clearMessageLoading();
            })
        );
    }
}
