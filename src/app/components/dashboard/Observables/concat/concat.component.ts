import { Component, OnInit } from '@angular/core';
import { interval, concat } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor(
    private _rxjs:RxjsService
  ) { }

  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(map(v => `<h1>Tech</h1> Video ${v+1}`),take(5))
    const sourceSports = interval(1000).pipe(map(v => `<h1>Sports</h1> Video ${v+1}`),take(3))
    const sourceNews = interval(1000).pipe(map(v => `<h1>News</h1> Video ${v+1}`),take(4))

    const finalObservable = concat(sourceTech, sourceSports, sourceNews);

    finalObservable.subscribe(res => {
      this._rxjs.printToLi(res, 'elcontainer')
    })
  }

}
