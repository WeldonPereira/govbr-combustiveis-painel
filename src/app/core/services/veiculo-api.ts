import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo } from '../models/veiculo.model';
import { environment } from '../../../environment/environment';

@Injectable({ providedIn: 'root' })
export class VeiculoApiService {
  private readonly API = `${environment.apiUrl}/veiculos`;

  constructor(private http: HttpClient) {}

  listar(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.API);
  }

  buscarPorId(id: number): Observable<Veiculo> {
    return this.http.get<Veiculo>(`${this.API}/${id}`);
  }
}
