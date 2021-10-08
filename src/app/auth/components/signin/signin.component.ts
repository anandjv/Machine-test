import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  userForm: FormGroup;
  email: string = 'anand@gmail.com';
  password: string = '123Qwd**';
  constructor(public formBuilder: FormBuilder, private notifyService: NotificationService, private router: Router) {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  ngOnInit(): void {
  }
  get getControl() {
    return this.userForm.controls;
  }



  receiveEmail(event) {
    //  this.email=event; 
    // console.log(event)
    this.userForm.patchValue({
      email: event,
    });
  }
  receivePassword(event) {
    // this.password=event; 
    this.userForm.patchValue({
      password: event,
    });
  }
  onSubmit() {
    if (this.userForm.value.email == '' || this.userForm.value.password == '') {
      this.validationAlert();
    }
    if (this.userForm.value.email == this.email && this.userForm.value.password == this.password) {
      this.loginSuccess();
      sessionStorage.setItem('name', 'validUser');

      this.router.navigate(['/admin/dashboard']);

    }
    else {
      this.incorrectLogin();
    }
  }



  loginSuccess() {
    this.notifyService.showSuccess("login sucessfull !!", "Success")
  }

  validationAlert() {
    this.notifyService.showError("Please fill all required feilds", "Error")
  }
  incorrectLogin() {
    this.notifyService.showWarning("Invalid Login", "Login failed")
  }
}
