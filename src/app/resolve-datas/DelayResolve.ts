import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { delay } from 'rxjs/operators';
import { SharedService } from '../shares/SharedService';
@Injectable()
export class DelayResolve implements Resolve<Observable<any>> {

  constructor(private shareService: SharedService) {
  }

  resolve(): any {
    this.shareService.sendMessageLoading(true);
    return of(null).pipe(delay(1000));
  }
}
