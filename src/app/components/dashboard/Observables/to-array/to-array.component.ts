import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {
  subs: Subscription | undefined;
  loader1 = false;
  loader2 = false;
  data1:any;
  data2:any;
  data3:any;
  constructor() { }

  ngOnInit(): void {

    // Ex-1 
    this.loader1 = true;
    const source = interval(1000);
    this.subs = source.pipe(
      take(5),
      toArray()
    ).subscribe(res => {
      this.data1=res;
    this.loader1 = false;

      // if(res > 7) {
      //   this.subs?.unsubscribe();
      // }
    })


    // Ex-2

    const users = [
      { name: 'Aayush', age: 21 },
      { name: 'Raj', age: 22 },
      { name: 'Brijesh', age: 23 },
      { name: 'Yash', age: 24 }
    ]

    const source2 = from(users);

    this.loader2 = true;
    source2.pipe(
      toArray()
    ).subscribe(res => {
      this.data2 = res;
    this.loader2 = false;

      console.log("From to  toArray", res)
    })

    // Ex-3

    const source3 = of("Aayush-1", "Brijesh-2", "Yash-3", "Raj-4");
    source3.pipe(toArray()).subscribe(res => {
      this.data3 = res;
    })

  }


}
