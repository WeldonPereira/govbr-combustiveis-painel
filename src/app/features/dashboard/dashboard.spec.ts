import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard';
import { DashboardFacade } from '../../core/facades/dashboard.facade';
import { of, firstValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  // Criamos um mock do facade
  const mockFacade = {
    precoMedioNacional$: of({ gasolina: 5.8, diesel: 6.1 }),
    totalLitros$: of(1500),
    totalPostos$: of(25),
    evolucaoPreco$: of([{ mes: 'Jan', valor: 5.5 }]),
    consumoPorUf$: of([{ uf: 'SP', total: 500 }]),
  };

  beforeEach(async () => {
    // 1. Mock do Chart.js para evitar erros de Canvas e de tipos
    // Usamos o prototype para garantir que qualquer "new Chart" não faça nada
    (Chart.prototype as any).construct = () => {};
    (Chart.prototype as any).destroy = () => {};
    (Chart.prototype as any).update = () => {};

    // 2. Mock do document.getElementById para não retornar null
    // O Chart.js precisa de um elemento para não lançar erro no constructor
    const originalGetElement = document.getElementById;
    document.getElementById = (id: string) => {
      return document.createElement('canvas');
    };

    await TestBed.configureTestingModule({
      imports: [CommonModule, DashboardComponent],
      providers: [{ provide: DashboardFacade, useValue: mockFacade }],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('deve criar o componente', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('deve carregar os dados do facade', async () => {
    fixture.detectChanges();
    const total = await firstValueFrom(component.totalLitros$);
    expect(total).toBe(1500);
  });

  it('deve inicializar os observables de gráfico', () => {
    fixture.detectChanges();
    expect(component.evolucaoPreco$).toBeDefined();
    expect(component.consumoPorUf$).toBeDefined();
  });
});