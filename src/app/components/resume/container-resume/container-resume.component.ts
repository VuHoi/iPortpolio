import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { Portfolio } from 'src/app/models/portfolio';
import { SharedService } from 'src/app/shares/SharedService';
import { ToastService } from '../../toast/toast.service';
@Component({
  selector: 'app-container-resume',
  templateUrl: './container-resume.component.html',
  styleUrls: ['./container-resume.component.css']
})
export class ContainerResumeComponent implements OnInit {
  info: Portfolio;
  canModify = true;
  constructor(
    private route: ActivatedRoute,
    private portfolio: PortfolioService,
    private sharedService: SharedService,
    private toastService: ToastService) {
    this.route.data.subscribe((data: any) => {
      this.canModify = data.portfolio.status;
      this.info = data.portfolio;
    });
    this.sharedService.getMessage().subscribe(data => {
      if (!data && data != null) {
        if (this.canModify) {
          this.portfolio.putPortfolioData(this.info).subscribe(() =>
            this.toastService.show({
              text: `Congratulations \n Modify success`,
              type: 'success',
            }),
            () => this.toastService.show({
              text: `Unfortunately \n Modify fail`,
              type: 'warning',
            }));
        } else {
          this.portfolio.postPortfolioData(this.info).subscribe(() =>
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
