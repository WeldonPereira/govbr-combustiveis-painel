import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Abastecimento } from '../models/abastecimento.model';
import { AbastecimentoApiService } from '../services/abastecimento-api.service';

@Injectable({ providedIn: 'root' })
export class ConsultaFacade {
  abastecimentos$!: Observable<Abastecimento[]>;

  constructor(private abastecimentoApi: AbastecimentoApiService) {
    this.abastecimentos$ = this.abastecimentoApi.listar();
  }
}
