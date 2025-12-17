import { Component } from '@angular/core';
import { GovMenuComponent } from '../../shared/gov-menu/gov-menu';

@Component({
  selector: 'app-gov-header',
  standalone: true,
  imports: [GovMenuComponent],
  templateUrl: './gov-header.html',
  styleUrls: ['./gov-header.scss'],
})
export class GovHeaderComponent {}
