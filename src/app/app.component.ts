import { Component } from '@angular/core';
import { GovLayout } from './layout/gov-layout/gov-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GovLayout],
  template: `<app-gov-layout></app-gov-layout>`
})
export class AppComponent {}
