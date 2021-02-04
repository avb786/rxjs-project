import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { RxjsService } from '../services/rxjs.service';


@Component({
  selector: 'app-of-from-event',
  templateUrl: './of-from-event.component.html',
  styleUrls: ['./of-from-event.component.scss']
})
export class OfFromEventComponent implements OnInit {
  objMesaages: any;
  constructor(
    private _rxjs: RxjsService
  ) { }

  ngOnInit(): void {
    // Of operator
    const observable1 = of("Aayush", "Shruti", "Cristano");
    observable1.subscribe(res => {
      this._rxjs.printToLi(res, 'elContainer')
    })


    const observable2 = of({ name: "Aayush", name1: "Shruti", name2: "Cristano" });
    observable2.subscribe(res => {
      this.objMesaages = res;
    })

    // From Operator

    const fromObs = from(['Nisha', 'Raman', 'Rashtri'])
    fromObs.subscribe(res => {
      this._rxjs.printToLi(res, 'elContainer2')
    })


    // From Promise
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(' Data Successfully added')
      }, 2900);
    })

    const from2 = from(promise);
    from2.subscribe(res => {
      this._rxjs.printToLi(res, 'elContainer3')
    })

    // String to observable

    const stringData = from("Cool Hai")
    stringData.subscribe(res => {
      this._rxjs.printToLi(res, 'elContainer4')
    })
  }

}
