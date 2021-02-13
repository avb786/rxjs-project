import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';
import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  personsData: any;
  isLoader: boolean = false;
  status = "No Data";
  constructor(
    private _rxjs: RxjsService
  ) { }

  ngOnInit(): void {
  }

  fetchData() {
    this.isLoader = true;
    this._rxjs.fetchData().pipe(
      //  retry(4),
      retryWhen(err => err.pipe(
        delay(3000),
        // scan(() =>{

        // }, 0)
      ))

    )
      .subscribe((res: any) => {
        console.log("Res", res);
        this.personsData = res.results;
        this.isLoader = false;
        this.status = "Success"
      }, err => {
        this.isLoader = false;
        this.status = "Failsed to fetch"
      })
  }

}
