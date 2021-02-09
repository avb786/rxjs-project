import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class CustomObservableComponent implements OnInit {

  count: any = 0;
  techStatus: any;
  subs1: Subscription | undefined;
  techStatus2: any;
  techStatus3: any;
  names: any;


  constructor(
    private _rxjs: RxjsService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    // Ex-01 (manual)

    const observable = Observable.create((observer: any) => {
        setTimeout(() => {
          observer.next("Angular")
        }, 1000);
        setTimeout(() => {
          observer.next("React")
        }, 2000);
        setTimeout(() => {
          observer.next("Vue")
        }, 3000);
        setTimeout(() => {
          observer.next("Meteor")
          observer.complete()
        }, 4000);
   
  })
  observable.subscribe((res:any) => {
    this._rxjs.printToLi(res, 'elContainer')
  }, (err: any) => {
    this.techStatus = 'error'
  this.showSuccessOrError("error", "Error","JavaScript Frameworks")
  }, () => {
    this.techStatus = 'completed'
  this.showSuccessOrError("success", "Success","JavaScript Frameworks")

  })



  // Ex-2 Custom interval
const custOb2 = Observable.create((observer:any) => {
  let counter = 0;
let data = [" CoffeScript",  " TypeScript", " PureScript", " LiveScript"]
setInterval(() => {
  observer.next(data[counter])
  counter++;
  if(counter > 4) {
    observer.complete();
  }
  if(counter > 3) {
    observer.error("No Lang Found");
  }
}, 1000)
})

this.subs1 = custOb2.subscribe((res: any) => {
this._rxjs.printToLi(res, 'elContainer2')
}, (error:any) => {
console.error(error);

  this.techStatus2 = "error"
  this.showSuccessOrError("error", "Error","Language Error")

}, () => {
  this.techStatus2 = "completed"
  this.showSuccessOrError("success", "Success","Language Success")
})

  
  // Ex-3 Random Names
  let data2 = ['Aayush', 'Shruti', 'Christano', 'Rashmi', 'Kritika', 'Raj']

  const custOb3 = Observable.create((observer: any) => {
    let counter = 0
    setInterval(() => {
      observer.next(data2[counter])
      counter++;
      if(counter > 4) {
        observer.complete();
      }
      if(counter > 3) {
        observer.error("No Name");
      }
    }, 1000)
  })

  custOb3.subscribe((res:any)=> {
    this.names = res;
  }, (error: any) => {
    this.names = error;
    this.techStatus3 = 'error'
  },  () => {
    this.techStatus3 = 'completed'
  })


}

showSuccessOrError(severity: any, summary: any ,message: any) {
  this.messageService.add({severity:severity, summary: summary, detail: message});
}

ngOnDestroy() {
  this.subs1?.unsubscribe()
}

}
