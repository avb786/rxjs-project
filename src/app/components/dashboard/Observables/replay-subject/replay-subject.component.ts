import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {
userList1 = ['Angular 9', 'Angular 10']
userList2 = ['React 15']
userList3 = ['Vue']
subscribeMode2: any;
subscribeMode3: any;
subscribeMode4: any;

// Toggle Properties

methodInterval = false;

// Subscription
subs2: Subscription | undefined;
subs3: Subscription | undefined;
methodIntervalSub:Subscription | undefined;
  constructor(
    private _rxjs: RxjsService
  ) { }

  ngOnInit(): void {
    this._rxjs.videoEmit.subscribe(res => {
      this.userList1.push(res)
    })
  }

  videoAdd(video: any) {
    this._rxjs.videoEmit.next(video.value)
  }

  userSubscribe(mode:any) {
    if(mode === 2){
      if( this.subscribeMode2) {
        this.subs2?.unsubscribe();
      } else {
        this.subs2 = this._rxjs.videoEmit.subscribe(res => {
          this.userList2.push(res)
        })
      }
      this.subscribeMode2 = !this.subscribeMode2;
    } 
    if(mode === 3){
      if(this.subscribeMode3) {
        this.subs3?.unsubscribe();
      } else {
        this.subs3 = this._rxjs.videoEmit.subscribe((res:any) => {
          this.userList3.push(res)
        })
      }
      this.subscribeMode3 = !this.subscribeMode3;
    }
  }

  toggleMethod() {
    const broadCast = interval(1200);
    if(this.methodInterval) {
      this.methodIntervalSub?.unsubscribe();
    } else {
      this.methodIntervalSub = broadCast.subscribe(res => {
        this._rxjs.videoEmit.next(`Video ${res}`)
      })
    }
   
    this.methodInterval = !this.methodInterval
  }
}
