# Visão geral do sistema

## 1. Objetivo do projeto
Desenvolver um aplicativo mobile focado em produtividade pessoal, permitindo que eu gerencie minhas metas diárias de forma simples e rápida.

## 2. Problema que o sistema resolve
O sistema resolve a desorganização e a falta de foco nas tarefas do dia a dia. Ele automatiza o acompanhamento do que já foi feito, entregando uma visão clara do progresso diário e evitando o esquecimento de compromissos importantes.

## 3. Atores envolvidos
- **Usuário Final:** Eu, que vou criar, visualizar e marcar a conclusão das minhas metas.
- **Administrador:** Responsável pela manutenção técnica e integridade dos dados no servidor.

## 4. Escopo inicial, dentro e fora
**Dentro do projeto:**
- Criação, edição e exclusão de objetivos diários.
- Checklist interativo para marcação de tarefas concluídas.
- Visualização do percentual de progresso do dia atual.
- Limpeza automática da lista para um novo ciclo a cada 24 horas.

**Fora do projeto:**
- Sincronização com Google Calendar ou Outlook.
- Compartilhamento de metas com outros usuários.
- Sistema de recompensas ou gamificação avançada.

## 5. Restrições técnicas
- **Mobile:** React Native.
- **Back-end:** API em ASP.NET Core com Clean Architecture.
- **Banco de Dados:** SQL Server.
- **Ambiente:** Desenvolvimento via GitHub Codespaces.

## 6. Premissas
- A interface precisa ser extremamente limpa (minimalista).
- A marcação de um objetivo deve ser feita com apenas um clique.
- Os dados não podem ser perdidos ao fechar o aplicativo.

## 7. Riscos conhecidos
- Perda de engajamento se o uso não for rápido o suficiente.
- Problemas de sincronização se eu estiver sem internet no momento da marcação.

## 8. Pedido para o Agente Arquiteto
Atue como arquiteto de software. Analise o cenário e proponha a melhor estrutura inicial, considerando arquitetura, módulos, dependências e riscos.