# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Descreva aqui a metodologia de trabalho do grupo para atacar o problema. Definições sobre os ambiente de trabalho utilizados pela  equipe para desenvolver o projeto. Abrange a relação de ambientes utilizados, a estrutura para gestão do código fonte, além da definição do processo e ferramenta através dos quais a equipe se organiza (Gestão de Times).

## Controle de Versão

Para a gestão do código fonte será utilizado o modelo de processo baseado no Git Flow e
a ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `release`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `hotfix`: melhorias ou acréscimos à documentação
- `bugfix`: uma funcionalidade encontra-se com problemas
- `support`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

## Gerenciamento de Projeto

### Divisão de Papéis


A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento.

A equipe está organizada da seguinte maneira:

  - Scrum Master: Pablo Alves.
  - Product Owner: Marlon Santos.

  - Equipe de Desenvolvimento:
    - Victor Kingma.
    - Lucas Reis.

  - Equipe de Design:
    - Amanda Brito.
    - Geison Amorim. 
    
### Processo

Para organização e distribuição das tarefas do projeto, a equipe está utilizando o Trello estruturado com as seguintes listas:

● Backlog: Recebe as tarefas a serem trabalhadas e representa o Product Backlog. Todas as atividades identificadas no decorrer do projeto também devem ser incorporadas a esta lista.

● Em andamento: Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando.

● Fase de teste: Nesta lista estão dispostos os testes de software e testes de usabilidade. 

● Revisão: Antes de mover para a lista de concluído, revisamos o que foi feito para ver se existe algum erro.

● Concluído: nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontos para ser entregues ao usuário. Não há mais edições ou revisões necessárias, ele está agendado e pronto para a ação.

O quadro kanban do grupo desenvolvido na ferramenta de gerenciamento de projetos está disponível através da URL (https://trello.com/b/iru1TNpo/kanban-choppanheiro) e é apresentado, no estado atual, na figura abaixo:

![trello](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-choppanheiro/assets/111931438/ff1da774-f765-4134-8218-2149da86133b)

### Ferramentas

As ferramentas empregadas no projeto são:

|**FUNÇÃO**| **PLATAFORMA** |**LINK DE ACESSO**|
|--------------------|------------------------------------|----------------------------------------|
|**Repositório de Código Fonte**|**GitHub**|https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-choppanheiro|
|**Projeto de Interface - Wireframe**|**Canva**||
|**Editor de Código**|**Visual Studio 2022**|https://visualstudio.microsoft.com/pt-br/downloads/|
|**Codificação do Front End**|**Visual Studio Code**|https://code.visualstudio.com/docs/?dv=win|
|**Documentação de projeto**|**GitHub**|https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-choppanheiro|
|**Ferramentas de Comunição**|**Microsoft Teams**|https://teams.microsoft.com|
|**Acompanhamentos semanal do andamento de atividades**|**WhatsApp**|https://chat.whatsapp.com/BUJQ5WOkPyVBpQvPSpn8Y6 |
|**Modelo Entidade Relacionamento**|**brModelo**|http://www.sis4.com/brModelo/download.html |
|**Diagrama Entidade Relacionamento**|**StarUML**| https://staruml.io/download |
|**Hospedagem **| Local Host|

Para o repositório de código fonte, gerenciamento do projeto, bem como para armazenamento e alteração dos documentos do projeto será utilizado o GitHub, instrumento robusto e amplamente usado no mercado. Para o projeto de interface e Wireframes, será utilizado o Figma, um editor online de gráficos com ênfase em prototipagem. Além disso, a comunicação ágil do grupo para acompanhamento diário das atividades se dará pelo uso da rede WhatsApp, enquanto as reuniões de discussão serão pelo Microsoft Teams.

O projeto será codificado utilizando a IDE Visual Studio Comunity 2022 com o SDK do .NET6 fazendo uso do ASP.NET Core MVC que nos possibilita criar um site dinâmico com acesso a dados de forma simples e intuitiva e com reaproveitamento de código. O Entity Framework Core será usado como ORM de acesso ao banco de dados e para o mapeamento e geração do banco de dados usaremos a técnica 'Code First', que consiste em escrever os Modelos de Entidades que representam tabelas do banco de dados e partir dos modelos gerar o banco de dados com seus respectivos relacionamentos entre entidades. Essa abordagem também nos permite manter um controle de versão sobre a evolução do banco de dados, novas tabelas e propriedades criadas utilizando o 'Migration'.
