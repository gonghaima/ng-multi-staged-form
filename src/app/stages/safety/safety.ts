import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-safety',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './safety.html',
  styleUrl: './safety.scss'
})
export class Safety {
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      safetyAnswer: [undefined]
    });
  }

  get safetyAnswer() {
    return this.form.get('safetyAnswer')?.value;
  }

  goToLanding() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.router.navigate(['']);
    }
  }
}
