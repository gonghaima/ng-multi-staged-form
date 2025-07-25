import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SectionStatusService } from '../../shared/section-status.service';
import { FormDataService } from '../../shared/form-data.service';

@Component({
  selector: 'app-safety',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './safety.html',
  styleUrl: './safety.scss'
})
export class Safety {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sectionStatus: SectionStatusService,
    private formDataService: FormDataService
  ) {
    this.form = this.fb.group({
      safetyAnswer: [undefined]
    });
  }

  get safetyAnswer() {
    return this.form.get('safetyAnswer')?.value;
  }

  goToLanding() {
    // Save form data
    this.formDataService.setSafetyData({
      safetyAnswer: this.safetyAnswer
    });
    
    // Mark Safety as complete and Your Details as notStarted
    this.sectionStatus.setStatus('safety', 'complete');
    this.sectionStatus.setStatus('yourDetails', 'notStarted');
    this.router.navigate(['']);
  }
}
