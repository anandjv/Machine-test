import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-comp',
  templateUrl: './password-comp.component.html',
  styleUrls: ['./password-comp.component.scss']
})
export class PasswordCompComponent implements OnInit {
  password: string = '';
  passwordForm: FormGroup;
  @Output() messageEvent = new EventEmitter();

  constructor(private formBulilder: FormBuilder) {
    this.passwordForm = formBulilder.group({
      password: ['', [Validators.required,
      Validators.pattern(/[A-Z]/), Validators.minLength(8), Validators.pattern(/\d/)]]


    })
  }

  ngOnInit(): void {
  }
  sendPassword() {
    this.messageEvent.emit(this.password)

  }

}

