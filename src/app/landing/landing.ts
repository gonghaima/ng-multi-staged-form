import { Component, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SectionStatusService, SectionStatus } from '../shared/section-status.service';

interface Section {
  key: string;
  label: string;
  status: SectionStatus;
  route: string;
}

@Component({
  selector: 'app-landing',
  imports: [RouterModule, CommonModule],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  sections1 = computed(() => [
    {
      key: 'whatYouNeedToKnow',
      label: 'What you need to know',
      status: this.sectionStatus.sectionStatus()['whatYouNeedToKnow'],
      route: '/what-you-need-to-know',
    },
    {
      key: 'safety',
      label: 'Safety',
      status: this.sectionStatus.sectionStatus()['safety'],
      route: '/safety',
    },
    {
      key: 'eligibility',
      label: 'Eligibility',
      status: this.sectionStatus.sectionStatus()['eligibility'],
      route: '/eligibility',
    },
  ]);

  sections2 = computed(() => [
    {
      key: 'yourDetails',
      label: 'Your details',
      status: this.sectionStatus.sectionStatus()['yourDetails'] ?? 'cannotStart',
      route: '/your-details',
    },
    // Add more for section 2 as needed
  ]);

  sections3 = computed(() => [
    {
      key: 'reviewAndSubmit',
      label: 'Review and submit',
      status: this.sectionStatus.sectionStatus()['reviewAndSubmit'] ?? 'cannotStart',
      route: '/review-and-submit',
    },
  ]);

  constructor(public sectionStatus: SectionStatusService) {}
}
