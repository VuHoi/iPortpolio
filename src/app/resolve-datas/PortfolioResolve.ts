import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { delay, finalize, map, catchError } from 'rxjs/operators';
import { SharedService } from '../shares/SharedService';
import { PortfolioService } from '../services/portfolio.service';
import { Title } from '@angular/platform-browser';
import { UserService } from '../services/user.service';
import { Portfolio } from '../models/portfolio';
@Injectable()
export class PortfolioResolve implements Resolve<Observable<any>> {
    constructor(
        public titleService: Title,
        private sharedService: SharedService,
        private portfolio: PortfolioService,
        private userService: UserService
    ) {
    }
    username = '';
    avatar: String = '';
    resolve(route: ActivatedRouteSnapshot): any {
        this.sharedService.sendMessageLoading(true);
        this.username = route.paramMap.get('name');
        this.sharedService.sendMessageRoute(this.username);
        const portfolio: Portfolio = {
            education: [
                { name: '', duration: '', position: '' },
                { name: '', duration: '', position: '' },
                { name: '', duration: '', position: '' },
            ],
            experiences: [{
                position: [
                    { title: '' },
                    { title: '' },
                    { title: '' }
                ], duration: '', name: '', address: '', discription: ''
            },
            {
                position: [
                    { title: '' },
                    { title: '' },
                    { title: '' }
                ], duration: '', name: '', address: '', discription: ''
            }],
            expertise: [
                { title: '' },
                { title: '' },
                { title: '' },
                { title: '' },
                { title: '' },
                { title: '' },
                { title: '' },
                { title: '' }
            ],
            skills: [
                { title: '', process: 0 },
                { title: '', process: 0 },
                { title: '', process: 0 },
                { title: '', process: 0 },
                { title: '', process: 0 },
                { title: '', process: 0 }
            ],
            slug: this.username,
            projects: [
                { name: '', param1: '', param2: '', icons: [''] },
                { name: '', param1: '', param2: '', icons: [''] },
                { name: '', param1: '', param2: '', icons: [''] },
                { name: '', param1: '', param2: '', icons: [''] }
            ]
        };
        this.userService.getCurrentUser().subscribe(user => {
            if (user) {
                if (this.username !== user.username) {
                    this.sharedService.clearMessage();
                }
            }
        }, () => this.sharedService.clearMessage());
        this.userService.getAvatarByName(this.username).subscribe(data => this.avatar = data);
        return this.portfolio.getResumeDataByName(this.username).pipe(
            delay(1000),
            map((data: Portfolio) => {
                this.titleService.setTitle(`${data.name} - ${route.data.title}`);
                data.status = true;
                data.avatar = this.avatar;
                return data;
            }),
            catchError(err => {
                portfolio.status = false;
                this.titleService.setTitle(`${this.username} - ${route.data.title}`);
                return of(portfolio);
            }),
            finalize(() => {
                this.sharedService.clearMessageLoading();
            })
        );
    }
}
