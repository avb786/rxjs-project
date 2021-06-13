import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  subs1: Subscription | undefined;
  subs2: Subscription | undefined;
  constructor(
    private _rxjs: RxjsService
  ) { }
  colorsData: any;

  ngOnInit(): void {
    const source = interval(1000);
    const mem = [
      { id: 1, name: 'Aayush' },
      { id: 2, name: 'Udit' },
      { id: 3, name: 'Yash' },
      { id: 4, name: 'Raish' },
      { id: 5, name: 'Vola' },
      { id: 6, name: 'Shrushtika' },
    ]

    this.subs1 = source.
      pipe(
        tap(res => {
          if (res > 4) {
            this.subs1?.unsubscribe()
          }
        }),
        map(res => `<b>Name: ${mem[res].name}</b>`),
        tap(res => console.log("After TAP", res))
      ).
      subscribe(res => {
        this._rxjs.printToLi(res, 'elContainer')
      }, err => {
      })

    // Ex-2 Colors

    const colors = ["Red", "Blue", "Green", "Orange", "Tomato", "Cyan"]

    this.subs2 = source.pipe(
      tap(res => {
        this.colorsData = colors[res];
        if (res === colors.length) {
          this.subs2?.unsubscribe()
          this.colorsData = "gold"
        }
      }),
      map(res => colors[res])
    ).subscribe(res => {
      this._rxjs.printToLi(res, "elContainer2")
    })

  }

}
