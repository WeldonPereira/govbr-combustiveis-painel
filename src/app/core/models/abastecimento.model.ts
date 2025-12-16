export interface Abastecimento {
  id: number;
  data: string;
  posto: string;
  cidade: string;
  uf: string;
  combustivel: string;
  valorLitro: number;
  totalPago: number;
  motoristaId: number;
  veiculoId: number;
}
