import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GovHeaderComponent } from '../gov-header/gov-header';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb';

@Component({
  selector: 'app-gov-layout',
  standalone: true,
  imports: [RouterOutlet, GovHeaderComponent, BreadcrumbComponent],
  templateUrl: './gov-layout.html',
  styleUrls: ['./gov-layout.scss'],
})
export class GovLayoutComponent {}
