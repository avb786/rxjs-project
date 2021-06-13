import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { of, from } from 'rxjs';
import { map, mergeAll, mergeMap, switchAll, delay, switchMap, pluck, debounceTime, distinctUntilChanged, concatMap } from 'rxjs/operators';
import { RxjsService } from '../services/rxjs.service';
import { NgForm } from '@angular/forms';
import { filter } from 'minimatch';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit, AfterViewInit {
@ViewChild('searchForm') searchForm: NgForm | undefined;
  searchResults: any;
  constructor(
    private _rxjs: RxjsService
  ) { }

  obj:any = {
    "angular": 1,
    "react": 2,
    "vue": 3
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);


    // Ex-01
    source.pipe(
      map(res => this.getData(res))
    ).subscribe(res => res.subscribe(res2 => {
      this._rxjs.printToLi(res2, 'elContainer')
      }))


      // Ex-02 Map + SwitchAll
      source.pipe(
        map(res => this.getData(res)),
        switchAll()
      ).subscribe(res => {
      this._rxjs.printToLi(res, 'elContainer2')       
      })


      // Ex-03 SwitchMap
      source.pipe(
        switchMap(res => this.getData(res))
            ).subscribe(res => {
      this._rxjs.printToLi(res, 'elContainer3')       
      })



  }

  ngAfterViewInit() {
    const formValue: any = this.searchForm?.valueChanges;
    console.log("Data", formValue)
    formValue.pipe(
      // map(res => res.search)
      pluck('search'),
      debounceTime(500), 
      distinctUntilChanged(),
      switchMap((data: any) => this._rxjs.getsearches(this.obj[data] ? this.obj[data] : 4 ))
    ).subscribe((res:any) => {
      this.searchResults = res;
    })
  }

  getData(data: any) {
    return of(` ${data} <small class="badge badge-success">Video Uploaded</small>`).pipe(delay(2000))
  }

}
