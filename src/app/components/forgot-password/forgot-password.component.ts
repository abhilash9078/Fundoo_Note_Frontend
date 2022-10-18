import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user : UserService) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
  },);
  }

  onSubmit() {
    if(this.forgotForm.valid){
      console.log("Valid data", this.forgotForm.value)
      let data = {
        email: this.forgotForm.value.email,
      }
      this.user.ForgotPassword(data).subscribe((result:any)=>{
        console.log("Reset password mail send successfully, and data: ", result)
      })
    }
    else{
      console.log("Invalid data", this.forgotForm.value)
    }
  }

}
