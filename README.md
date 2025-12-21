# Gov Combustíveis – Painel Gerencial

Painel web desenvolvido em **Angular** para visualização e consulta de dados sobre combustíveis, seguindo o padrão visual e conceitual do **gov.br**.  
O sistema fornece uma **visão gerencial (Dashboard)** e uma **consulta detalhada de abastecimentos**, utilizando uma API mockada com `json-server`.

## Visão Geral

O **Gov Combustíveis** tem como objetivo disponibilizar informações organizadas e acessíveis sobre preços, consumo e registros de abastecimento, apoiando análises gerenciais e consultas operacionais.

O projeto foi construído utilizando:
- Angular com **Standalone Components**
- Arquitetura baseada em **features**, **core** e **layout**
- Padrão **Facade**
- API mockada via **db.json**
- Estilo inspirado no **Design System gov.br (DS-GOV)**

## Funcionalidades

### Home
- Página inicial no estilo gov.br
- Acesso rápido às principais áreas do sistema:
  - Dashboard
  - Consulta de Abastecimentos

### Dashboard (Visão Gerencial)
- Cards de KPI:
  - Preço Médio Nacional
  - Total de Abastecimentos
  - Total Gasto
- Estrutura preparada para gráficos e análises visuais
- Foco em clareza e tomada de decisão

### Consulta de Abastecimentos
- Listagem detalhada de registros
- Filtros avançados:
  - Estado (UF)
  - Tipo de combustível
  - Período (data)
- Paginação
- Consumo de dados via API mockada

### Detalhe do Registro
- Exibir informações do Motorista e Veículo
   - Nome
   - CPF mascarado
   - Placa
- Botão "Reportar Erro":
   - Um botão que simularia o envio de uma correção

## Tecnologias Utilizadas

- **Angular** (Standalone Components)
- **TypeScript**
- **SCSS**
- **RxJS**
- **Angular Router**
- **json-server**
- **Node.js / npm**

## Testes Automatizados
Os componentes possuem testes unitários (*.spec.ts) com Angular TestBed.

Executar testes:
```bash
ng test
```
Testes cobrem:
- Facade
- Components
- Interações básicas:
  - botões
  - navegação
  - visualização de dados

## Storybook

Documentação visual de componentes criada com Storybook.

Permite que designers e desenvolvedores visualizem os componentes isoladamente.

Executar Storybook:
```bash
npm run storybook
```

Componentes disponíveis:
- ConsultaComponent com dados mockados via Faker
- Cards e gráficos do Dashboard (preparados para visualização isolada)

## Estrutura do Projeto

```text
src/
 ├── app/
 │   ├── core/          # Services, facades e models
 │   ├── features/      # Dashboard, Consulta, Home
 │   ├── layout/        # Layout principal gov.br
 │   ├── shared/        # Componentes reutilizáveis
 │   ├── app.routes.ts  # Rotas
 │   └── app.ts         # Componente raiz
 ├── enviroment/        # Configurações de prod/dev (corrigido o erro de digitação)
 ├── stories/           # Documentação global ou assets do Storybook
 └── db.json            # API mockada
```
## Como Executar o Projeto

### 1️ Clonar o repositório
```bash
git clone https://github.com/WeldonPereira/govbr-combustiveis-painel.git
cd govbr-combustiveis-painel
```
### 2 Instalar as dependências
```bash
npm install
```

### 3 Executar a API Mock (json-server)
Abra um terminal e execute:
```bash
npm run mock
```
A API ficará disponível em:
http://localhost:3000

### 4 Executar a aplicação Angular

Abra outro terminal e execute:
```
ng serve
```
A aplicação estará disponível em:
http://localhost:4200

## Dados Mockados
Os dados são fornecidos pelo arquivo db.json, contendo:
- Combustíveis
- Abastecimentos
- Motoristas
- Veículos
Esses dados simulam uma API REST para desenvolvimento e testes.

## Padrões e Arquitetura

- Standalone Components (Angular moderno)

- Facade Pattern para centralizar regras de negócio
- Separação clara de responsabilidades:
   - UI → Components
   - Regras → Facades
   - Comunicação HTTP → Services

## Licença

Projeto desenvolvido para fins educacionais e avaliativos.

## Autor
Weldon Pereira
