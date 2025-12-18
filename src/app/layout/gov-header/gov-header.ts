import { Component } from '@angular/core';
import { GovMenuComponent } from '../../shared/gov-menu/gov-menu';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-gov-header',
  standalone: true,
  imports: [GovMenuComponent, RouterLink, RouterLinkActive],
  templateUrl: './gov-header.html',
  styleUrls: ['./gov-header.scss'],
})
export class GovHeaderComponent {}
