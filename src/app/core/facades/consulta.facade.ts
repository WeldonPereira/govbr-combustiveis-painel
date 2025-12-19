import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { AbastecimentoApiService } from '../services/abastecimento-api.service';
import { Abastecimento } from '../models/abastecimento.model';

@Injectable({ providedIn: 'root' })
export class ConsultaFacade {
  private readonly uf$ = new BehaviorSubject<string>('');
  private readonly combustivel$ = new BehaviorSubject<string>('');
  private readonly periodo$ = new BehaviorSubject<{ inicio: string; fim: string } | null>(null);

  private readonly pagina$ = new BehaviorSubject<number>(1);
  readonly paginaAtual$ = this.pagina$.asObservable(); // ✅ EXPOSTO
  readonly tamanhoPagina = 5;

  private readonly abastecimentos$: Observable<Abastecimento[]>;

  readonly filtrados$: Observable<Abastecimento[]>;
  readonly paginados$: Observable<Abastecimento[]>;
  readonly totalPaginas$: Observable<number>;

  constructor(private api: AbastecimentoApiService) {
    this.abastecimentos$ = this.api.listar();

    this.filtrados$ = combineLatest([
      this.abastecimentos$,
      this.uf$,
      this.combustivel$,
      this.periodo$,
    ]).pipe(
      map(([items, uf, combustivel, periodo]) =>
        items.filter((item) => {
          const porUf = !uf || item.uf === uf;
          const porComb = !combustivel || item.combustivel === combustivel;
          const porPeriodo = !periodo || (item.data >= periodo.inicio && item.data <= periodo.fim);

          return porUf && porComb && porPeriodo;
        })
      )
    );

    this.paginados$ = combineLatest([this.filtrados$, this.pagina$]).pipe(
      map(([items, pagina]) => {
        const inicio = (pagina - 1) * this.tamanhoPagina;
        return items.slice(inicio, inicio + this.tamanhoPagina);
      })
    );

    this.totalPaginas$ = this.filtrados$.pipe(
      map((items) => Math.max(1, Math.ceil(items.length / this.tamanhoPagina)))
    );
  }

  filtrarUf(uf: string): void {
    this.uf$.next(uf);
    this.pagina$.next(1);
  }

  filtrarCombustivel(tipo: string): void {
    this.combustivel$.next(tipo);
    this.pagina$.next(1);
  }

  filtrarPeriodo(inicio: string, fim: string): void {
    if (!inicio || !fim) return;
    this.periodo$.next({ inicio, fim });
    this.pagina$.next(1);
  }

  proximaPagina(): void {
    this.pagina$.next(this.pagina$.value + 1);
  }

  paginaAnterior(): void {
    this.pagina$.next(Math.max(1, this.pagina$.value - 1));
  }
}
