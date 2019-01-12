import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileNavigationComponent } from './mobile-navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MobileNavigationComponent],
  exports: [MobileNavigationComponent]
})
export class MobileNavigationModule { }
