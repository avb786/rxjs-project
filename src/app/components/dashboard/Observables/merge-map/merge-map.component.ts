import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor(
    private _rxjs: RxjsService
  ) { }

  getData(data: any) {
    return of(`Data ${data}`)
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);


    // Ex-01
    source.pipe(
      map(res => this.getData(res))
    ).subscribe(res => res.subscribe(res2 => {
      this._rxjs.printToLi(res2, 'elContainer')
      }))


      // Ex-02 Map + MergeAll
      source.pipe(
        map(res => this.getData(res)),
        mergeAll()
      ).subscribe(res => {
      this._rxjs.printToLi(res, 'elContainer2')       
      })


      // Ex-03 MergeMap
      source.pipe(
        mergeMap(res => this.getData(res))
            ).subscribe(res => {
      this._rxjs.printToLi(res, 'elContainer3')       
      })

  }
}
