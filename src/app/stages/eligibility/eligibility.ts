import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from '../../shared/form-data.service';
import { SectionStatusService } from '../../shared/section-status.service';

export interface EligibilityData {
  isAustralianResident?: 'yes' | 'no';
  hasPatientOver18?: 'yes' | 'no';
  hasPatientInRelationship?: 'yes' | 'no';
  isParentOfAllPatient?: 'yes' | 'no';
  hasPatientUnderWelfareOrder?: 'yes' | 'no';
  isOtherPartyAustralianResident?: 'yes' | 'no';
}

@Component({
  selector: 'app-eligibility',
  imports: [CommonModule, FormsModule],
  templateUrl: './eligibility.html',
  styleUrl: './eligibility.scss',
})
export class Eligibility {
  eligibilityData = signal<EligibilityData>({});

  constructor(
    private router: Router,
    private formDataService: FormDataService,
    private sectionStatusService: SectionStatusService
  ) {
    // Load existing data if any
    const existingData = this.formDataService.getEligibilityData();
    if (existingData) {
      this.eligibilityData.set(existingData);
    }
  }

  updateField(field: keyof EligibilityData, value: 'yes' | 'no' | undefined) {
    this.eligibilityData.update((current) => ({
      ...current,
      [field]: value,
    }));

    // If not a resident, clear and ignore the rest of the fields
    if (field === 'isAustralianResident' && value === 'no') {
      this.eligibilityData.update((current) => ({
        ...current,
        hasPatientOver18: undefined,
        hasPatientInRelationship: undefined,
        isParentOfAllPatient: undefined,
        hasPatientUnderWelfareOrder: undefined,
        isOtherPartyAustralianResident: undefined,
      }));
    }
  }

  goBack() {
    this.router.navigate(['']);
  }

  continue() {
    // Save the data
    this.formDataService.setEligibilityData(this.eligibilityData());

    // Mark section as complete
    this.sectionStatusService.setStatus('eligibility', 'complete');

    // Unlock Safety if still locked
    const currentSafetyStatus = this.sectionStatusService.getStatus('safety');
    if (currentSafetyStatus === 'cannotStart' || !currentSafetyStatus) {
      this.sectionStatusService.setStatus('safety', 'notStarted');
    }

    // Navigate to next section or back to landing
    this.router.navigate(['']);
  }

  isFormValid(): boolean {
    const data = this.eligibilityData();

    // Must answer the first question
    if (!data.isAustralianResident) {
      return false;
    }

    // If not a resident, no further answers required
    if (data.isAustralianResident === 'no') {
      return true;
    }

    // If resident, require all remaining answers except the optiona
    return !!(
      data.hasPatientOver18 &&
      data.hasPatientInRelationship &&
      data.isParentOfAllPatient
    );
  }
}
