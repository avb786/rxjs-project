import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-encapsulated',
  templateUrl: './child-encapsulated.component.html',
  styleUrls: ['./child-encapsulated.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom

})
export class ChildEncapsulatedComponent implements OnInit {
title:string = "I am child-encapsulated Component"
  constructor() { }

  ngOnInit(): void {
  }

}
