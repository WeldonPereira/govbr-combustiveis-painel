import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Combustivel } from '../models/combustivel.model';

@Injectable({ providedIn: 'root' })
export class CombustivelApiService {
  private readonly API = 'http://localhost:3000/combustiveis';

  constructor(private http: HttpClient) {}

  listar(): Observable<Combustivel[]> {
    return this.http.get<Combustivel[]>(this.API);
  }
}
