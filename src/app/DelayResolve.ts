import { of, Observable } from 'rxjs';
import { Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import {  delay } from 'rxjs/operators';
@Injectable()
export class DelayResolve implements Resolve<Observable<any>> {

  constructor() {
  }

  resolve(): any {
    return  of(null).pipe(delay(0));
  }
}
