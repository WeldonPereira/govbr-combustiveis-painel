import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gov-layout',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './gov-layout.html',
  styleUrl: './gov-layout.scss',
})
export class GovLayout {}
