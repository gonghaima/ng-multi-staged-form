import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SectionStatusService } from '../../shared/section-status.service';
import { FormDataService } from '../../shared/form-data.service';

@Component({
  selector: 'app-your-details',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './your-details.html',
  styleUrl: './your-details.scss'
})
export class YourDetails implements OnInit {
  form: FormGroup;
  titleOptions = ['Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Other'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sectionStatus: SectionStatusService,
    private formDataService: FormDataService
  ) {
    this.form = this.fb.group({
      title: [''],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      previousLastName: [undefined],
      preferredName: [undefined],
      dateOfBirth: ['', Validators.required],
      gender: [undefined, Validators.required],
      tfn: [''],
      csrn: [undefined],
      crn: [undefined],
      hadCase: [undefined],
    });
  }

  ngOnInit() {
    const existing = this.formDataService.getYourDetailsData();
    if (existing) {
      this.form.patchValue(existing);
    }
  }

  get f() { return this.form.controls; }

  goToLanding() {
    // Always save form data (even if incomplete) so users don't lose progress
    this.formDataService.setYourDetailsData({
      title: this.form.get('title')?.value,
      firstName: this.form.get('firstName')?.value,
      middleName: this.form.get('middleName')?.value,
      lastName: this.form.get('lastName')?.value,
      previousLastName: this.form.get('previousLastName')?.value,
      preferredName: this.form.get('preferredName')?.value,
      dateOfBirth: this.form.get('dateOfBirth')?.value,
      gender: this.form.get('gender')?.value,
      tfn: this.form.get('tfn')?.value,
      csrn: this.form.get('csrn')?.value,
      crn: this.form.get('crn')?.value,
      hadCase: this.form.get('hadCase')?.value,
    });
    
    // Only mark as complete if form is valid
    if (this.form.valid) {
      this.sectionStatus.setStatus('yourDetails', 'complete');
      this.sectionStatus.setStatus('income', 'notStarted');
      this.sectionStatus.setStatus('reviewAndSubmit', 'notStarted');
    } else {
      // If form is invalid, mark as in progress
      this.sectionStatus.setStatus('yourDetails', 'inProgress');
    }
    
    this.router.navigate(['']);
  }
}
