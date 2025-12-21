import { Meta, StoryObj } from '@storybook/angular';
import { ConsultaComponent } from './consulta';
import { of } from 'rxjs';
import { Abastecimento } from '../../core/models/abastecimento.model';
import { faker } from '@faker-js/faker';

const gerarAbastecimento = (id: number): Abastecimento => {
  const valorLitro = parseFloat(faker.finance.amount({ min: 3, max: 6, dec: 2 }));
  const litros = parseFloat(faker.finance.amount({ min: 10, max: 100, dec: 2 }));
  return {
    id,
    data: faker.date.recent({ days: 30 }).toISOString().split('T')[0],
    posto: faker.company.name(),
    cidade: faker.location.city(),
    uf: faker.location.state(),
    combustivel: faker.helpers.arrayElement(['Gasolina', 'Diesel', 'Etanol']),
    valorLitro,
    totalPago: parseFloat((valorLitro * litros).toFixed(2)),
    motoristaId: faker.number.int({ min: 1, max: 50 }),
    veiculoId: faker.number.int({ min: 100, max: 200 }),
  };
};

const mockAbastecimentos: Abastecimento[] = Array.from({ length: 20 }, (_, i) =>
  gerarAbastecimento(i + 1)
);

class MockConsultaFacade {
  paginados$ = of(mockAbastecimentos);
  totalPaginas$ = of(1);
  paginaAtual$ = of(1);
}

export default {
  title: 'Consulta/ConsultaComponent',
  component: ConsultaComponent,
  args: {
    facade: new MockConsultaFacade(),
  },
} as Meta<ConsultaComponent>;

export const Default: StoryObj<ConsultaComponent> = {};
