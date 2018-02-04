import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventService {
  private subject = new Subject<any>();

  constructor() { }

  sendEvent(data: any) {
    this.subject.next(data);
  }

  clearEvent() {
    this.subject.next();
  }

  getEvent(): Observable<any> {
    return this.subject.asObservable();
  }

}
