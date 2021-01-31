import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.scss']
})
export class IntervalTimerComponent implements OnInit {
message:any;
toggleOnOff: boolean = true;
  videoSubscribtion: Subscription = new Subscription;
  constructor(
    public _rxjs: RxjsService
  ) { }

  ngOnInit(): void {
  }
  toggleOperators(){
  let broadCastVideo;
  if(this.toggleOnOff) {
    broadCastVideo = interval(2000)
  } else {
    broadCastVideo = timer(5000, 2000)
  }
  this.toggleOnOff = !this.toggleOnOff;
this.videoSubscribtion = broadCastVideo.subscribe(res => {
  this.message = `Video : ${res}`;
  this._rxjs.printToLi(res, 'elContainer')
  this._rxjs.printToLi(res, 'elContainer2')
  this._rxjs.printToLi(res, 'elContainer3')
  if(res > 5) {
    this.videoSubscribtion.unsubscribe()
  }
})
  }
}
