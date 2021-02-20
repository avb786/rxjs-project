import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements OnInit {
  @ViewChild('myInput') myInput: ElementRef | undefined;
  @ViewChild('myInput2') myInput2: ElementRef | undefined;
  reqData: any;
  reqData2: any;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    // Ex-1 Debounce Time
    const searchText = fromEvent<any>(this.myInput?.nativeElement, 'keyup');
    searchText.
      pipe(
        map(event => event?.target.value),
        debounceTime(1500)
      )
      .subscribe(res => {
        this.reqData = res;
      })

      // Ex-2 DistinctUntil Changed
      const searchText2 = fromEvent<any>(this.myInput2?.nativeElement, 'keyup');
    searchText2.
      pipe(
        map(event => event?.target.value),
        debounceTime(1300),
        distinctUntilChanged()
      )
      .subscribe(res => {
        this.reqData2 = res;
      })
  }

}
