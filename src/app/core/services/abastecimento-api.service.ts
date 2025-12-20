import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Abastecimento } from '../models/abastecimento.model';
import { environment } from '../../../environment/environment';

@Injectable({ providedIn: 'root' })
export class AbastecimentoApiService {
  private readonly API = `${environment.apiUrl}/abastecimentos`;

  constructor(private http: HttpClient) {}

  listar(): Observable<Abastecimento[]> {
    return this.http.get<Abastecimento[]>(this.API);
  }

  buscarPorId(id: number): Observable<Abastecimento> {
    return this.http.get<Abastecimento>(`${this.API}/${id}`);
  }
}
