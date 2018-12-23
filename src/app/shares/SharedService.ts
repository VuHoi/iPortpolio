import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private subject = new Subject<any>();
    private routeSubject = new Subject<any>();
    private loadingSubject = new Subject<any>();
    sendMessage(change: any) {
        this.subject.next(change);
    }
    clearMessage() {
        this.subject.next();
    }
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
    sendMessageLoading(change: any) {
        this.loadingSubject.next(change);
    }
    clearMessageLoading() {
        this.loadingSubject.next();
    }
    getMessageLoading(): Observable<any> {
        return this.loadingSubject.asObservable();
    }
    sendMessageRoute(change: any) {
        this.routeSubject.next(change);
    }
    clearMessageRoute() {
        this.routeSubject.next();
    }
    getMessageRoute(): Observable<any> {
        return this.routeSubject.asObservable();
    }
}
