import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { delay, finalize, map, catchError } from 'rxjs/operators';
import { SharedService } from '../shares/SharedService';
import { Home } from '../models/home';
import { PortfolioService } from '../services/portfolio.service';
import { Title } from '@angular/platform-browser';
import { UserService } from '../services/user.service';
@Injectable()
export class HomeResolve implements Resolve<Observable<any>> {

    constructor(
        public titleService: Title,
        private sharedService: SharedService,
        private portfolio: PortfolioService,
        private userService: UserService,
        private router: Router
    ) {
    }
    username = '';
    resolve(route: ActivatedRouteSnapshot): any {
        this.sharedService.sendMessageLoading(true);
        this.username = route.paramMap.get('name');
        if (this.username) {
            this.userService.checkUserExiting(this.username).subscribe((data: any) => {
                if (!data.status) { this.router.navigate(['/notfound']); }
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
                return data;
            }),
            catchError(err => {
                home.status = false;
                this.titleService.setTitle(`${this.username} - ${route.data.title}`);
                return of(home);
            }),
            finalize(() => {
                this.sharedService.clearMessageLoading();
            })
        );
    }
}
