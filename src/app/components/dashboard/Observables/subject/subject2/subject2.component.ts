import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../../services/rxjs.service';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.scss']
})
export class Subject2Component implements OnInit {

  username: any ;
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
