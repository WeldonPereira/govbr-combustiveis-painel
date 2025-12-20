import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Combustivel } from '../models/combustivel.model';
import { environment } from '../../../environment/environment';

@Injectable({ providedIn: 'root' })
export class CombustivelApiService {
  private readonly API = `${environment.apiUrl}/combustiveis`;

  constructor(private http: HttpClient) {}

  listar(): Observable<Combustivel[]> {
    return this.http.get<Combustivel[]>(this.API);
  }
}
