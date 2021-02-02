import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-input',
  templateUrl: './parent-input.component.html',
  styleUrls: ['./parent-input.component.scss']
})
export class ParentInputComponent implements OnInit {
  messageFromChildRecieved: any = "Pending";

  constructor() { }

  ngOnInit(): void {
  }

  toChildItem:any;
  toChildValue:any;

  dataSendToChild(items: any, values: any) {
this.toChildItem = items.value;
this.toChildValue = values.value;
  }
  parentFunction(event: any) {
    this.messageFromChildRecieved = event;
  }

}
