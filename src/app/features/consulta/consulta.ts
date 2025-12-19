import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ConsultaFacade } from '../../core/facades/consulta.facade';
import { Abastecimento } from '../../core/models/abastecimento.model';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta.html',
  styleUrls: ['./consulta.scss'],
})
export class ConsultaComponent {

  registros$: Observable<Abastecimento[]>;
  totalPaginas$: Observable<number>;
  paginaAtual$: Observable<number>;

  constructor(public facade: ConsultaFacade) {
    this.registros$ = this.facade.paginados$;
    this.totalPaginas$ = this.facade.totalPaginas$;
    this.paginaAtual$ = this.facade.paginaAtual$;
  }
}
