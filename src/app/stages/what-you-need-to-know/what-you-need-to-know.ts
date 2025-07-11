import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-what-you-need-to-know',
  imports: [],
  templateUrl: './what-you-need-to-know.html',
  styleUrl: './what-you-need-to-know.scss'
})
export class WhatYouNeedToKnow {
  constructor(private router: Router) {}

  goToLanding() {
    this.router.navigate(['']);
  }
}
