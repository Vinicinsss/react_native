# Modelagem de banco de dados

## 1. Objetivo da modelagem
Definir como vou salvar e organizar os objetivos diários no SQL Server para que o aplicativo consiga ler e atualizar tudo bem rápido.

## 2. Entidades principais
- **Objetivos**: Tabela única e principal do sistema. Ela guarda o identificador, o texto do objetivo, o status (se está concluído ou não) e a data exata da criação.

## 3. Relacionamentos
Como o escopo inicial foca em um uso simples e direto para gerenciamento diário, não há relacionamentos complexos ou tabelas dependentes neste primeiro momento. O foco é apenas a tabela `Objetivos`.

## 4. Normalização e justificativa
A modelagem vai até a 3ª Forma Normal (3FN). Isso já resolve qualquer redundância e deixa o banco enxuto o suficiente para o aplicativo responder quase instantaneamente.

## 5. Padrões obrigatórios
- Chave primária deve ser do tipo `UNIQUEIDENTIFIER` (UUID) para facilitar a geração descentralizada e integração.
- O nome da tabela deve estar no plural (`Objetivos`), conforme definido no glossário.
- Nomes das colunas devem seguir o padrão PascalCase (ex: `DataCriacao`, `TextoObjetivo`) para facilitar o mapeamento com o Entity Framework.
- Criar um índice na coluna de data, já que o app faz o filtro diário constantemente.

## 6. Estratégia de migração
Vou utilizar a abordagem Code-First do Entity Framework Core. As mudanças no banco serão versionadas por meio das *migrations* do próprio framework.

## 7. Script inicial
Solicitar que a IA gere o script SQL inicial com tabelas, chaves, índices e restrições.

## 8. Pedido para o Agente Arquiteto
Analise a modelagem proposta e indique riscos, melhorias e possíveis simplificações.