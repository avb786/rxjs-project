import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  public notifier: any;
  username: any;

  constructor(
    private _rxjs: RxjsService
  ) { }

  ngOnInit(): void {
    this._rxjs.username.subscribe(res => {
      this.username = res
    })
  }

  changeNotify() {
    this._rxjs.exclusive.next(this.notifier)
  }

  ngOnDestroy() {
    this._rxjs.exclusive.next(0)
  }
}
