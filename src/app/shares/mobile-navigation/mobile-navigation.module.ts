import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileNavigationComponent } from './mobile-navigation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MobileNavigationComponent],
  exports: [MobileNavigationComponent]
})
export class MobileNavigationModule { }
