import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CombustivelApiService } from '../services/combustivel-api.service';
import { AbastecimentoApiService } from '../services/abastecimento-api.service';

@Injectable({ providedIn: 'root' })
export class ConsultaFacade {
  combustiveis$: Observable<any>;
  abastecimentos$: Observable<any>;

  constructor(
    private combustivelApi: CombustivelApiService,
    private abastecimentoApi: AbastecimentoApiService
  ) {
    this.combustiveis$ = this.combustivelApi.listar();
    this.abastecimentos$ = this.abastecimentoApi.listar();
  }
}
