import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  myReactiveForm!: FormGroup;
  notAllowedNames = ['avb786', 'yash_56']
  formBodyData: any = 'pending';
  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.notAllowedNameData.bind(this)]),
        'email': new FormControl(null, [Validators.email, Validators.required], this.notAllowedEmailData)
      }),
      'course': new FormControl('vue'),
      'gender': new FormControl('male'),
      'skills': new FormArray([
        new FormControl(null)
      ])
    })
    // this.myReactiveForm.valueChanges.subscribe(res => {
    //   console.log("valueChanges", res)
    // })
    this.myReactiveForm.statusChanges.subscribe(res => {
      console.log("statusChanges", res)
    })
  }
  onSubmit() {
    console.log(this.myReactiveForm)
    if(this.myReactiveForm.valid) {
      this.formBodyData = this.myReactiveForm.value;
      this.myReactiveForm.reset({
        'userDetails' : {
          'username': '',
          'email': ''
        },
        course : 'react',
        gender: 'male',
        skills: ['']
      });
    } else {
      this.formBodyData = "Invalid";
    }
  }
  onAddSkills() {
    const controlsForSkills = new FormControl(null, Validators.required);
    (<FormArray>this.myReactiveForm.get('skills')).push(controlsForSkills)
  }
  notAllowedNameData(control: FormControl) {
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
      return {
        'nameNotAllowed': true
      }
    }
    return null;
  }
 private notAllowedEmailData(control: FormControl) : Promise<any> | Observable<any> | AsyncValidatorFn {
   const  myRes = new Promise((resolve, reject) => {
     setTimeout(() => {
      if(control.value === 'avb@gmail.com') {
        resolve({'emailNotAllowed': true})
      } else {
        resolve(null)
      }
     }, 2500);
   })
   return myRes;
}


}
