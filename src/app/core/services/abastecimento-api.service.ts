import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Abastecimento } from '../models/abastecimento.model';

@Injectable({ providedIn: 'root' })
export class AbastecimentoApiService {
  private readonly API = 'http://localhost:3000/abastecimentos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Abastecimento[]> {
    return this.http.get<Abastecimento[]>(this.API);
  }

  buscarPorId(id: number): Observable<Abastecimento> {
    return this.http.get<Abastecimento>(`${this.API}/${id}`);
  }
}
