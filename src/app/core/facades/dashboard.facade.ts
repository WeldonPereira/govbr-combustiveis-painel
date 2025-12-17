import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CombustivelApiService } from '../services/combustivel-api.service';
import { AbastecimentoApiService } from '../services/abastecimento-api.service';

@Injectable({ providedIn: 'root' })
export class DashboardFacade {

  combustiveis$;
  abastecimentos$;

  totalAbastecimentos$;
  totalGasto$;

  constructor(
    private combustivelApi: CombustivelApiService,
    private abastecimentoApi: AbastecimentoApiService
  ) {
    this.combustiveis$ = this.combustivelApi.listar();
    this.abastecimentos$ = this.abastecimentoApi.listar();

    this.totalAbastecimentos$ = this.abastecimentos$.pipe(
      map(lista => lista.length)
    );

    this.totalGasto$ = this.abastecimentos$.pipe(
      map(lista =>
        lista.reduce((total, item) => total + item.totalPago, 0)
      )
    );
  }
}
