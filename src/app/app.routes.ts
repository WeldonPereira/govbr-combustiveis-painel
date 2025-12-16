import { Routes } from '@angular/router';
import { GovLayout } from './layout/gov-layout/gov-layout';

export const routes: Routes = [
  {
    path: '',
    component: GovLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/placeholder/placeholder')
            .then(m => m.PlaceholderComponent)
      }
    ]
  }
];
