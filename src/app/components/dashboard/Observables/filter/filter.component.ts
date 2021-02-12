import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  dataArr = [
    {id: 1, name: "Aayush", gender: "Male"},
    {id: 2, name: "Brijesh" ,  gender: "Male"},
    {id: 3, name: "Yash",  gender: "Male"},
    {id: 4, name: "Raj", gender: "Male"},
    {id: 5, name: "Fanny",  gender: "Female"},
    {id: 6, name: "Jinal", gender: "Female"}
  ];
  dataProvider:any;
  dataProvider2: any;
  dataProvider3: any;



  constructor() { }

  ngOnInit(): void {

    const source = from(this.dataArr);
    

    // Ex-01 Filter by length

    source
    .pipe(
      filter(m => m.name.length > 4),
      toArray()
    ).
    subscribe(res => {
      this.dataProvider = res;
    })

    // Ex-2 Filter by gender

    source
    .pipe(
      filter(m => m.gender === "Male"),
      toArray()
    ).
    subscribe(res => {
      this.dataProvider2 = res;
    })

    // Ex-3 Filter by
    source
    .pipe(
      filter(m => m.id <= 3),
      toArray()
    ).
    subscribe(res => {
      this.dataProvider3 = res;
    })

  }

}
