import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SectionStatusService } from '../../shared/section-status.service';

@Component({
  selector: 'app-what-you-need-to-know',
  imports: [],
  templateUrl: './what-you-need-to-know.html',
  styleUrl: './what-you-need-to-know.scss'
})
export class WhatYouNeedToKnow {
  constructor(private router: Router, private sectionStatus: SectionStatusService) {}

  goToLanding() {
    this.sectionStatus.setStatus('whatYouNeedToKnow', 'complete');
    this.sectionStatus.setStatus('eligibility', 'notStarted');
    this.router.navigate(['']);
  }
}
