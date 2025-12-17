import { Routes } from '@angular/router';
import { GovLayoutComponent } from './layout/gov-layout/gov-layout';

export const routes: Routes = [
  {
    path: '',
    component: GovLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard').then((m) => m.DashboardComponent),
      },
    ],
  },
];
