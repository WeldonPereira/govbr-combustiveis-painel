import { Injectable } from '@angular/core';
import { AbastecimentoApiService } from '../services/abastecimento-api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardFacade {
  abastecimentos$!: Observable<any[]>;

  precoMedioNacional$!: Observable<{ gasolina: number; diesel: number }>;
  totalLitros$!: Observable<number>;
  totalPostos$!: Observable<number>;

  evolucaoPreco$!: Observable<{ mes: string; valor: number }[]>;
  consumoPorUf$!: Observable<{ uf: string; total: number }[]>;

  constructor(private abastecimentoApi: AbastecimentoApiService) {
    this.abastecimentos$ = this.abastecimentoApi.listar();

    this.precoMedioNacional$ = this.abastecimentos$.pipe(
      map((items) => {
        const soma: any = { Gasolina: [], Diesel: [] };

        items.forEach((i) => soma[i.combustivel]?.push(i.valorLitro));

        return {
          gasolina: soma.Gasolina.length
            ? soma.Gasolina.reduce((a: number, b: number) => a + b, 0) / soma.Gasolina.length
            : 0,
          diesel: soma.Diesel.length
            ? soma.Diesel.reduce((a: number, b: number) => a + b, 0) / soma.Diesel.length
            : 0,
        };
      })
    );

    this.totalLitros$ = this.abastecimentos$.pipe(
      map((items) => items.reduce((acc, i) => acc + i.totalPago / i.valorLitro, 0))
    );

    this.totalPostos$ = this.abastecimentos$.pipe(
      map((items) => new Set(items.map((i) => i.posto)).size)
    );

    this.evolucaoPreco$ = this.abastecimentos$.pipe(
      map((items) =>
        items
          .slice()
          .sort((a, b) => a.data.localeCompare(b.data))
          .map((i) => ({
            mes: new Date(i.data).toLocaleDateString('pt-BR', { month: 'short' }),
            valor: i.valorLitro,
          }))
      )
    );

    this.consumoPorUf$ = this.abastecimentos$.pipe(
      map((items) => {
        const mapa: Record<string, number> = {};
        items.forEach((i) => {
          mapa[i.uf] = (mapa[i.uf] || 0) + i.totalPago;
        });
        return Object.entries(mapa).map(([uf, total]) => ({ uf, total }));
      })
    );
  }
}
