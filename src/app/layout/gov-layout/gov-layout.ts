import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gov-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './gov-layout.html',
  styleUrls: ['./gov-layout.scss'],
})
export class GovLayoutComponent {}
