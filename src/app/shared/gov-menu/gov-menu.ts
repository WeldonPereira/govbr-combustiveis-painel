import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-gov-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gov-menu.html',
  styleUrls: ['./gov-menu.scss']
})
export class GovMenuComponent {}
