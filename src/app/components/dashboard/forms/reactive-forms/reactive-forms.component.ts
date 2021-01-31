import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  myReactiveForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'userDetails':  new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.email, Validators.required])
      }),
      'course': new FormControl('vue'),
      'gender': new FormControl('male')
    })
  }
  onSubmit(){
    console.log(this.myReactiveForm)
  }
}
