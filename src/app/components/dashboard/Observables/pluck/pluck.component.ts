import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
  dataProvider: any;
  dataProvider2: any;
  constructor() { }

  user = [
    {
      name: 'Aayush', skills: "Angular", job: { title: "Angular Developer", exp: "10 Years" }
    },
    {
      name: 'Rasaika', skills: "React", job: { title: "React Developer", exp: "2 Years" }
    },
    {
      name: 'Dinal', skills: "Vue", job: { title: "Vue Developer", exp: "12 Years" }
    }
  ]

  ngOnInit(): void {
    // Ex-1

    const userData = from(this.user)

    userData.
      pipe(
        // map(data => data.name),
        pluck('skills'),
        toArray()
      ).
      subscribe(res => {
        this.dataProvider = res;

      })


    // Ex-2

    userData.
      pipe(
        // map(data => data.name),
        pluck('job', 'title'),
        toArray()
      ).
      subscribe(res => {
        this.dataProvider2 = res;

      })

  }

}
