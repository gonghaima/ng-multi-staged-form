import { Routes } from '@angular/router';
import { YourDetails } from './stages/your-details/your-details';
import { Income } from './stages/income/income';
import { Landing } from './landing/landing';
import { WhatYouNeedToKnow } from './stages/what-you-need-to-know/what-you-need-to-know';
import { Safety } from './stages/safety/safety';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'your-details', component: YourDetails },
  { path: 'income', component: Income },
  { path: 'what-you-need-to-know', component: WhatYouNeedToKnow },
  { path: 'safety', component: Safety },
];
