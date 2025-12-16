import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Combustivel } from '../models/combustivel.model';
import { CombustivelApiService } from '../services/combustivel-api.service';

@Injectable({ providedIn: 'root' })
export class DashboardFacade {
  combustiveis$!: Observable<Combustivel[]>;

  constructor(private combustivelApi: CombustivelApiService) {
    this.combustiveis$ = this.combustivelApi.listar();
  }
}
