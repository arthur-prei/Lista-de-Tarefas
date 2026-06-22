# Lista de Tarefas
https://arthur-prei.github.io/Lista-de-Tarefas/

### Descrição
Projeto web para gerenciamento de tarefas desenvolvido com HTML, JavaScript e Tailwind CSS

O sistema permite adicionar tarefas, adicionar níveis de prioridade, cancelar/concluir tarefas.
Sempre que uma tarefa é concluída ou cancelada, ela é adicionada no log de tarefas de acordo com o que foi decidido pelo usuário.

### Funcionalidades
- Adicionar tarefas
- Definir nível de prioridade da tarefa
- Concluir tarefa
- Cancelar tarefa
- Histórico de tarefas concluídas e canceladas
- Registro de data e hora das ações
- Contadores dinâmicos para: tarefas pendentes tarefas concluídas e tarefas canceladas
- Ordenação das tarefas de acordo com o nível de prioridade delas
- Responsividade para diferentes telas

### Tecnologias
- HTML
- JavaScript
- Tailwind CSS

## Estrutura

### Tarefas Pendentes
Área responsável pela adição, conclusão e remoção das tarefas, além de ser onde as tarefas pendentes são visualizadas

Cada tarefa possui:
- Título
- Prioridade
- Botão de conclusão
- Botão de cancelamento

### Log de Tarefas
Área responsável por armazenar o histórico das ações realizadas

Para cada tarefa registrada são exibidos:
- Título
- Status (concluída ou cancelada)
- Data
- Horário

## Sistema de Prioridades
### Prioridade
- baixa(✦)  
- média(✦✦) 
- alta(✦✦✦)

## Responsividade
O layout se adapta a diferentes tamanhos de tela utilizando classes responsivas do Tailwind CSS

### Modos de Exibição
- Dispositivos móveis: exibição em coluna
- Desktop: exibição em dois painéis lado a lado

## Dificuldades
### Tailwind CSS
Não possuia muita praticidade com o Tailwind, foi preciso fazer várias pesquisas para adaptação. Apesar da dificuldade, acredito que a utilização do Tailwind permite um alto nível de personalização ao projeto, permitindo criar componentes únicos sem ter que mexer diretamente no CSS

## Autor
### Arthur Porto de Souza Silva
#### Estudante de Análise e Desenvolvimento de Sistemas
