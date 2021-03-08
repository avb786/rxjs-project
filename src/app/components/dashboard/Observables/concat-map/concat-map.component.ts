import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, concatAll, delay, concatMap, mergeMap } from 'rxjs/operators';
import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  constructor(
    private _rxjs: RxjsService

  ) { }

  notifyData = [
    {
      name: 'Facebook',
      data: 'Adren Added you in a group',
      color: 'bg-primary'
    },
    {
      name: 'Whatsapp',
      data: 'Yashvi messaged you',
      color: 'bg-success'

    },
    {
      name: 'Twitter',
      data: 'Narendra Modi twitted',
      color: 'bg-primary'

    }
  ]

  ngOnInit(): void {
    const source = from(['Tech', 'Bussiness', 'Management']);

    // EX-01 Map
    source.pipe(
      map(res => this.getData(res))
    ).subscribe(res => {
      res.subscribe(res2 => {
        this._rxjs.printToLi(res2, 'elContainer')
      })
    })

    // EX-02 Map + ConcatAll
    source.pipe(
      map(res => this.getData(res)),
      concatAll()
    ).subscribe(res => {
      this._rxjs.printToLi(res, 'elContainer2')
    })

    // EX-03 Map + ConcatMap
    source.pipe(
      concatMap(res => this.getData(res))
    ).subscribe(res => {
      this._rxjs.printToLi(res, 'elContainer3')
    })


    // EX-04 MergeMap
    source.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe(res => {
      this._rxjs.printToLi(res, 'elContainer4')
    })
from(this.notifyData).pipe(
concatMap(res => of(res).pipe(delay(2000))),

).subscribe(res => {
  this._rxjs.printPrepend('Facebook', 'fb', res.name, res.data, res.color)
})
   
  }

  getData(data: any) {
    return of(`Data ${data}`).pipe(delay(2000))
  }
}
