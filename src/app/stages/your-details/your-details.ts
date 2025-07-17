import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-your-details',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './your-details.html',
  styleUrl: './your-details.scss'
})
export class YourDetails {
  form: FormGroup;
  titleOptions = ['Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Other'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: [''],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      previousLastName: [undefined, Validators.required],
      preferredName: [undefined, Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: [undefined, Validators.required],
      tfn: [''],
      csrn: [undefined, Validators.required],
      crn: [undefined, Validators.required],
      hadCase: [undefined, Validators.required],
    });
  }

  get f() { return this.form.controls; }
}
