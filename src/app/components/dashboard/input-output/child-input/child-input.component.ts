import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.scss']
})
export class ChildInputComponent implements OnInit {
@Input() recieveItem: any;
@Input() recieveValue: any;
@Output() messageRecieved = new EventEmitter<any>();
message:any = "Recieved Successfully";
  constructor() { }

  ngOnInit(): void {
  }

  send(){
    this.messageRecieved.emit(this.message)
  }

}
