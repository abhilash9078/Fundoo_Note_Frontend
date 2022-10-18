import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user:UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cpassword: ['', Validators.required],
  },);
  }

  onSubmit() {
    if(this.registerForm.valid){
      console.log("Valid data", this.registerForm.value)
      let data = {
        name: this.registerForm.value.firstname,
        email: this.registerForm.value.username,
        password: this.registerForm.value.password,
        password2: this.registerForm.value.cpassword,
      }
      this.user.Registration(data).subscribe((result:any)=>{
        console.log("Registration Success, and data: ", result)
      })

    }
    else{
      console.log("Invalid data", this.registerForm.value)
    }
  }

}
