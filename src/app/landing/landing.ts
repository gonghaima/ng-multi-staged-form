import { Component, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SectionStatusService, SectionStatus } from '../shared/section-status.service';

interface Section {
  key: string;
  label: string;
  status: SectionStatus;
}

@Component({
  selector: 'app-landing',
  imports: [RouterModule, CommonModule],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  sections = computed(() => [
    {
      key: 'whatYouNeedToKnow',
      label: 'What you need to know',
      status: this.sectionStatus.sectionStatus()['whatYouNeedToKnow'],
    },
    {
      key: 'safety',
      label: 'Safety',
      status: this.sectionStatus.sectionStatus()['safety'],
    },
    // ...add more sections as needed
  ]);

  constructor(public sectionStatus: SectionStatusService) {}
}
