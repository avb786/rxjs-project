import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../../services/rxjs.service';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.scss']
})
export class Subject1Component implements OnInit {

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
