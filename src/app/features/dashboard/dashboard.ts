import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { DashboardFacade } from '../../core/facades/dashboard.facade';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {

  combustiveis$;
  totalAbastecimentos$;
  totalGasto$;

  constructor(private facade: DashboardFacade) {
    this.combustiveis$ = this.facade.combustiveis$;
    this.totalAbastecimentos$ = this.facade.totalAbastecimentos$;
    this.totalGasto$ = this.facade.totalGasto$;
  }
}
