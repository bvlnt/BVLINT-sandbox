import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  fb = new FormBuilder();
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });
  formErrors = {
    name: '',
    email: '',
    message: '',
  };
  validationMessages = {
    name: {
      required: 'Name is required.',
    },
    email: {
      required: 'Email is required.',
      email: 'Email must be a valid email address.',
    },
    message: {
      required: 'Message is required.',
    },
  };

  constructor(private http: HttpClient) {}

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.form.value);
  }

  ngOnInit(): void {}
}
