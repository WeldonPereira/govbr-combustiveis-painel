import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Observable } from 'rxjs';
import { DashboardFacade } from '../../core/facades/dashboard.facade';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  imports: [CommonModule],
  styleUrls: ['./dashboard.scss'],
})
export class DashboardComponent implements AfterViewInit {
  precoMedioNacional$!: Observable<{ gasolina: number; diesel: number }>;
  totalLitros$!: Observable<number>;
  totalPostos$!: Observable<number>;

  evolucaoPreco$!: Observable<{ mes: string; valor: number }[]>;
  consumoPorUf$!: Observable<{ uf: string; total: number }[]>;

  constructor(private facade: DashboardFacade) {
    this.precoMedioNacional$ = this.facade.precoMedioNacional$;
    this.totalLitros$ = this.facade.totalLitros$;
    this.totalPostos$ = this.facade.totalPostos$;

    this.evolucaoPreco$ = this.facade.evolucaoPreco$;
    this.consumoPorUf$ = this.facade.consumoPorUf$;
  }

  ngAfterViewInit(): void {
    this.evolucaoPreco$.subscribe((dados) => {
      new Chart('priceChart', {
        type: 'line',
        data: {
          labels: dados.map((d) => d.mes),
          datasets: [
            {
              label: 'Preço da Gasolina (R$)',
              data: dados.map((d) => d.valor),
              tension: 0.3,
            },
          ],
        },
      });
    });

    this.consumoPorUf$.subscribe((dados) => {
      new Chart('ufChart', {
        type: 'bar',
        data: {
          labels: dados.map((d) => d.uf),
          datasets: [
            {
              label: 'Total Consumido (R$)',
              data: dados.map((d) => d.total),
            },
          ],
        },
      });
    });
  }
}
