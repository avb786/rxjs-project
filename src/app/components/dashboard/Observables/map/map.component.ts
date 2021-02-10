import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  subs1: Subscription | undefined;
  subs2: Subscription | undefined;
  message1: any;
  message2: any;
  message3: any;

  constructor(
    private _rxjs: RxjsService
  ) { }

  ngOnInit(): void {
    // Ex-1
    const brodcast = interval(1000)
    this.subs1 = brodcast.
      pipe(
        map(val => 'Video:' + val)
      ).
      subscribe(res => {
        this.message1 = res;

      })

    setTimeout(() => {
      this.subs1?.unsubscribe()
    }, 10000);

    this.subs2 = brodcast.
      pipe(map(data => data * 10))
      .subscribe(res => {
        this.message2 = res
      })

    setTimeout(() => {
      this.subs2?.unsubscribe()
    }, 10000);



    const mem = [
      { id: 1, name: 'Aayush' },
      { id: 2, name: 'Udit' },
      { id: 3, name: 'Yash' },
      { id: 4, name: 'Raish' },
      { id: 5, name: 'Vola' },
      { id: 6, name: 'Shrushti' },
    ]

    let members = from(mem);

    members.
      pipe(map(data => `Name: ${data.name}`)).
      subscribe(res => {
        this._rxjs.printToLi(res, 'elContainer')
      })


  }

}
