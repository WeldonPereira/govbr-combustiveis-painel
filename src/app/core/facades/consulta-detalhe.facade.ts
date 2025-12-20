import { Injectable } from '@angular/core';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { AbastecimentoApiService } from '../services/abastecimento-api.service';
import { MotoristaApiService } from '../services/motorista-api';
import { VeiculoApiService } from '../services/veiculo-api';
import { Abastecimento } from '../models/abastecimento.model';
import { Motorista } from '../models/motorista.model';
import { Veiculo } from '../models/veiculo.model';

export interface ConsultaDetalheVM {
  abastecimento: Abastecimento;
  motorista: Motorista;
  veiculo: Veiculo;
}

@Injectable({ providedIn: 'root' })
export class ConsultaDetalheFacade {
  constructor(
    private abastecimentoApi: AbastecimentoApiService,
    private motoristaApi: MotoristaApiService,
    private veiculoApi: VeiculoApiService
  ) {}

  carregarDetalhe(id: number): Observable<ConsultaDetalheVM> {
    return this.abastecimentoApi.buscarPorId(id).pipe(
      switchMap((abastecimento) =>
        forkJoin({
          abastecimento: [abastecimento],
          motorista: this.motoristaApi.buscarPorId(abastecimento.motoristaId),
          veiculo: this.veiculoApi.buscarPorId(abastecimento.veiculoId),
        })
      ),
      switchMap((result) => [
        {
          abastecimento: result.abastecimento,
          motorista: result.motorista,
          veiculo: result.veiculo,
        },
      ])
    );
  }
}
