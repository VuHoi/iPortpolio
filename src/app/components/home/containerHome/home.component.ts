import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Home } from 'src/app/models/home';
import { SharedService } from 'src/app/shares/SharedService';
import { ToastService } from '../../toast/toast.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home: Home;
  canModify = true;
  constructor(
    private route: ActivatedRoute,
    private portfolio: PortfolioService,
    private sharedService: SharedService,
    private toastService: ToastService) {
    this.route.data.subscribe((data: any) => {
      this.canModify = data.home.status;
      this.home = data.home;
    });
    this.sharedService.getMessage().subscribe(data => {
      if (!data && data != null) {
        if (this.canModify) {
          this.portfolio.putHomeData(this.home).subscribe(() =>
            this.toastService.show({
              text: `Congratulations \n Modify success`,
              type: 'success',
            }),
            () => this.toastService.show({
              text: `Unfortunately \n Modify fail`,
              type: 'warning',
            }));
        } else {
          this.portfolio.postHomeData(this.home).subscribe(() =>
            this.toastService.show({
              text: `Congratulations \n Post success`,
              type: 'success',
            }),
            () => this.toastService.show({
              text: `Unfortunately \n Post fail`,
              type: 'warning',
            }));
        }
      }
    });
  }
  ngOnInit() {
  }
}
