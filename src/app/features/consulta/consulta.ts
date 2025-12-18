import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaFacade } from '../../core/facades/consulta.facade';
import { Observable } from 'rxjs';
import { Abastecimento } from '../../core/models/abastecimento.model';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consulta.html',
  styleUrls: ['./consulta.scss'],
})
export class ConsultaComponent {
  abastecimentos$!: Observable<Abastecimento[]>;

  constructor(private facade: ConsultaFacade) {
    this.abastecimentos$ = this.facade.abastecimentos$;
  }
}
