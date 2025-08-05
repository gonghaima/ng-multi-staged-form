import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormDataService, SafetyData, YourDetailsData, EligibilityData } from '../../shared/form-data.service';

@Component({
  selector: 'app-review-and-submit',
  imports: [CommonModule],
  templateUrl: './review-and-submit.html',
  styleUrl: './review-and-submit.scss'
})
export class ReviewAndSubmit {
  safetyData = computed(() => this.formDataService.getSafetyData());
  yourDetailsData = computed(() => this.formDataService.getYourDetailsData());
  eligibilityData = computed(() => this.formDataService.getEligibilityData());

  constructor(
    private router: Router,
    private formDataService: FormDataService
  ) {}

  goToLanding() {
    this.router.navigate(['']);
  }

  editSafety() {
    this.router.navigate(['/safety']);
  }

  editEligibility() {
    this.router.navigate(['/eligibility']);
  }

  editYourDetails() {
    this.router.navigate(['/your-details']);
  }

  submitApplication() {
    // Here you would typically send the data to your backend
    console.log('Submitting application with data:', this.formDataService.getAllFormData());
    alert('Application submitted successfully!');
    this.formDataService.clearAllData();
    this.router.navigate(['']);
  }

  // Helper methods for displaying data
  getDisplayValue(value: any): string {
    if (value === undefined || value === null || value === '') {
      return 'Not provided';
    }
    return value.toString();
  }

  getYesNoDisplay(value: 'yes' | 'no' | undefined): string {
    if (value === 'yes') return 'Yes';
    if (value === 'no') return 'No';
    return 'Not provided';
  }

  getGenderDisplay(value: 'male' | 'female' | 'other' | undefined): string {
    if (value === 'male') return 'Male';
    if (value === 'female') return 'Female';
    if (value === 'other') return 'Other';
    return 'Not provided';
  }
}
