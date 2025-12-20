import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  ConsultaDetalheFacade,
  ConsultaDetalheVM,
} from '../../core/facades/consulta-detalhe.facade';
import { Observable, switchMap } from 'rxjs';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-consulta-detalhe',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './consulta-detalhe.html',
  styleUrls: ['./consulta-detalhe.scss'],
})
export class ConsultaDetalheComponent {
  detalhe$!: Observable<ConsultaDetalheVM>;

  constructor(private route: ActivatedRoute, private facade: ConsultaDetalheFacade) {}

  ngOnInit() {
    this.detalhe$ = this.route.paramMap.pipe(
      switchMap((params) => this.facade.carregarDetalhe(Number(params.get('id'))))
    );
  }

  reportarErro() {
    console.log('Erro reportado pelo usuário');
    alert('Erro reportado (simulação)');
  }

  mascararCpf(cpf: string): string {
    return cpf.replace(/^(\d{3})\d{6}(\d{2})$/, '$1.***.***-$2');
  }
}
