import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Motorista } from '../models/motorista.model';

@Injectable({ providedIn: 'root' })
export class MotoristaApiService {

  private readonly API = 'http://localhost:3000/motoristas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Motorista[]> {
    return this.http.get<Motorista[]>(this.API);
  }

  buscarPorId(id: number): Observable<Motorista> {
    return this.http.get<Motorista>(`${this.API}/${id}`);
  }
}
