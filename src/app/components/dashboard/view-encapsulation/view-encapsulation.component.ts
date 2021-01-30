import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
