import { Component } from '@angular/core';
import { GovLayoutComponent } from './layout/gov-layout/gov-layout';
import { GovHeaderComponent } from './layout/gov-header/gov-header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GovLayoutComponent, GovHeaderComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}

