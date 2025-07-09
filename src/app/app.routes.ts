import { Routes } from '@angular/router';
import { YourDetails } from './stages/your-details/your-details';
import { Income } from './stages/income/income';
import { Landing } from './landing/landing';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'your-details', component: YourDetails },
  { path: 'income', component: Income },
];
