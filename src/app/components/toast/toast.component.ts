import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

import { ToastData, TOAST_CONFIG_TOKEN, ToastConfig , defaultToastConfig} from './toast-config';
import { ToastRef } from './toast-ref';
import { toastAnimations, ToastAnimationState } from './toast-animation';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['toast.component.css'],
  animations: [toastAnimations.fadeToast],
})
export class ToastComponent implements OnInit, OnDestroy {
  animationState: ToastAnimationState = 'default';
  iconType: string;
  url: String = '../../../assets/images/dog-notify.png';
  private intervalId: any;
  defaultToastConfig: any;
  constructor(
    readonly data: ToastData,
    readonly ref: ToastRef,
    // @Inject(TOAST_CONFIG_TOKEN) public toastConfig: ToastConfig
  ) {
    this.iconType = data.type === 'success' ? 'done' : data.type;
    this.url = data.type === 'success' ? '../../../assets/images/dog-notify.png' : '../../../assets/images/dog-warning.png';
    this.defaultToastConfig = defaultToastConfig;
  }

  ngOnInit() {
    this.intervalId = setTimeout(() => this.animationState = 'closing', 1000);
  }

  ngOnDestroy() {
    clearTimeout(this.intervalId);
  }

  close() {
    this.ref.close();
  }

  onFadeFinished(event: AnimationEvent) {
    const { toState } = event;
    const isFadeOut = (toState as ToastAnimationState) === 'closing';
    const itFinished = this.animationState === 'closing';

    if (isFadeOut && itFinished) {
      this.close();
    }
  }
}
