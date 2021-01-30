import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {
  @ViewChild('addBtn')
  addBtn!: ElementRef;
  constructor(
    private _rxjs: RxjsService
  ) { }

  ngOnInit(): void {
    
  }
ngAfterViewInit() {
  let count = 0;
  const buttonEvent = fromEvent(this.addBtn.nativeElement, 'click');
  buttonEvent.subscribe(res => {
    count++;
    this._rxjs.printToLi(count, 'eleContainer')
    this._rxjs.printToLi(count, 'eleContainer2')
  })
}

}
