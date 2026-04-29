# Requisitos e regras de negócio

## 1. Requisitos funcionais
- O aplicativo deve permitir que eu crie um novo objetivo de texto.
- O sistema deve listar todos os objetivos cadastrados para o dia atual.
- Devo conseguir marcar um objetivo como concluído.
- O aplicativo deve permitir a exclusão de um objetivo existente.
- A lista precisa ser resetada ou arquivada automaticamente a cada novo dia.

## 2. Requisitos não funcionais
- A interface gráfica deve ter um tempo de resposta quase instantâneo.
- O aplicativo deve ser capaz de lidar com a falta de internet temporária, não travando a tela.
- O back-end em ASP.NET Core deve responder às requisições em menos de 500ms.
- A navegação tem que ser intuitiva e sem muitos menus.

## 3. Regras de negócio
- Um objetivo não pode ter o texto vazio ou ultrapassar 150 caracteres.
- A limpeza automática da lista de objetivos acontece à meia-noite (00:00).
- Objetivos já excluídos não podem ser recuperados na interface principal.
- Não é possível marcar como concluído um objetivo que não existe mais.

## 4. Casos de uso prioritários
1. Adicionar uma nova meta diária.
2. Listar as metas e marcar uma como concluída.

## 5. Critérios de aceite
- Consigo abrir o app, digitar um texto e ver a nova meta aparecer na lista imediatamente.
- Ao tocar em uma meta, ela muda de cor ou ganha um risco indicando conclusão.
- Se eu fechar e abrir o aplicativo, as metas que criei e marquei continuam lá.

## 6. Dependências entre requisitos
- A listagem e a conclusão dependem diretamente da funcionalidade de criação de metas estar pronta e salvando no banco de dados.

## 7. Pedido para o Agente Arquiteto
Organize estes requisitos, identifique inconsistências e indique lacunas que precisam ser decididas antes do desenvolvimento.