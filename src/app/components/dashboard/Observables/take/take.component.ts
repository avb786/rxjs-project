import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor(
    private _rxjs: RxjsService
  ) { }

  ngOnInit(): void {
    const source = interval(1000);

    const arr = ['Aayush', 'Shruti', 'Christano', 'Rashmi', 'Kritika', 'Raj', "Utsav", "Ravi"];

    const obsever = from(arr)

    // Ex-1 take(5)
    source.
      pipe(take(5))
      .subscribe(res => {
        this._rxjs.printToLi(arr[res], 'elContainer')
      })

      // Ex-2 takeLast
      obsever.
      pipe(takeLast(5))
      .subscribe(res => {
        this._rxjs.printToLi(res, 'elContainer2')
      })

      // Ex-3 takeUntill
      let condition1 = fromEvent(document, 'keydown');
      source.
      pipe(
        map(res=> `Num: ${res}`),
        takeUntil(condition1)
        )
      .subscribe(res => {
        this._rxjs.printToLi(res, 'elContainer3')
      })
  }

}
