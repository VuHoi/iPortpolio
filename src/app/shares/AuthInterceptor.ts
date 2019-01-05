import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<HttpEventType.Response>> {
    const authReq = req.clone({
      setHeaders: { 'x-access-token': localStorage.getItem('token') }
    });
    return next.handle(authReq);
  }
}
