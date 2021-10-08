import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-comp',
  templateUrl: './email-comp.component.html',
  styleUrls: ['./email-comp.component.scss']
})
export class EmailCompComponent implements OnInit {
  email: string = '';
  emailForm: FormGroup;
  @Output() messageEvent = new EventEmitter();

  constructor(private formBulilder: FormBuilder) {
    this.emailForm = formBulilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],

    })
  }

  ngOnInit(): void {
  }
  sendMessage() {
    this.messageEvent.emit(this.email)
  }



}
