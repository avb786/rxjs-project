import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../../services/rxjs.service';

@Component({
  selector: 'app-subject3',
  templateUrl: './subject3.component.html',
  styleUrls: ['./subject3.component.scss']
})
export class Subject3Component implements OnInit {

  username: any;
  constructor(
    private _rxjs: RxjsService
  ) { }

  ngOnInit(): void {
    this._rxjs.username.subscribe(res => {
      this.username = res;
    })
  }

  userVal(uname: any) {
    this._rxjs.username.next(uname.value);    
  }
}
