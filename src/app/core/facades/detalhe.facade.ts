import { Injectable } from '@angular/core';
import { AbastecimentoApiService } from '../services/abastecimento-api.service';

@Injectable({ providedIn: 'root' })
export class DetalheFacade {
  constructor(private abastecimentoApi: AbastecimentoApiService) {}

  buscarPorId(id: number) {
    return this.abastecimentoApi.buscarPorId(id);
  }
}
