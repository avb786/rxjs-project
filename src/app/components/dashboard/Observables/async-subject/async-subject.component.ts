import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {
  asyncVideoEmit: any;
  constructor(
    private _rxjs: RxjsService
  ) { }

  ngOnInit(): void {
    this._rxjs.asyncVideoEmit.subscribe(res => {
      this.asyncVideoEmit = res;
    })
  }

  videoAdd(video: any) {
    this._rxjs.asyncVideoEmit.next(video.value)
  }

 
  onComplete() {
    this._rxjs.asyncVideoEmit.complete()
  }
}
