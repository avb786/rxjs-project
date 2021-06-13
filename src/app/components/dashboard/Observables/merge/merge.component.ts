import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../services/rxjs.service';
import { interval, merge } from 'rxjs';
import { map, take, concat } from 'rxjs/operators';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {
  constructor(
    private _rxjs:RxjsService
  ) { }

  ngOnInit(): void {
    const sourceTech = interval(3000).pipe(map(v => `<h1>Tech</h1> Video ${v+1}`),take(5))
    const sourceSports = interval(1500).pipe(map(v => `<h1>Sports</h1> Video ${v+1}`),take(3))
    const sourceNews = interval(2000).pipe(map(v => `<h1>News</h1> Video ${v+1}`),take(4))

    const finalObservable = merge(sourceTech, sourceSports, sourceNews);

    finalObservable.subscribe(res => {
      this._rxjs.printToLi(res, 'elcontainer')
    })
  }

}
