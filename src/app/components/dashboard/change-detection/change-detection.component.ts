import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit {
  public nameOfPerson: any = "Aayush";
  public exampleObj: any = {
    name: String,
    email: String
  };
  public count = 0;
  constructor(
    public cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    setInterval(() => {
      this.count++;
      this.cdr.markForCheck();
    }, 1000)

    this.exampleObj = {
      name: "Aayush",
      email: 'abc@acc.com'
    }
  }

  change() {
    this.exampleObj.name = "Varun"
  }
  changeObject() {
    this.exampleObj = {
      name: "Radhika Seth",
      email: 'radhika21@acc.com'
    }
  }

  detach(){
this.cdr.detach();
  }

  reattach(){
this.cdr.reattach();
  }
  detect(){
this.cdr.detectChanges();
  }

}
