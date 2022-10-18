import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  changeForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.changeForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      cpassword: ['', Validators.required],
  },);
  }

  onSubmit() {
    if(this.changeForm.valid){
      console.log("Valid data", this.changeForm.value)
    }
    else{
      console.log("Invalid data", this.changeForm.value)
    }
  }

}
