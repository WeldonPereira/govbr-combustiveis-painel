import { Routes } from '@angular/router';
import { GovLayoutComponent } from './layout/gov-layout/gov-layout';

export const routes: Routes = [
  {
    path: '',
    component: GovLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/gov-home/gov-home').then((m) => m.GovHomeComponent),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard').then((m) => m.DashboardComponent),
      },
      {
        path: 'consulta',
        loadComponent: () =>
          import('./features/consulta/consulta').then((m) => m.ConsultaComponent),
      },
    ],
  },
];
