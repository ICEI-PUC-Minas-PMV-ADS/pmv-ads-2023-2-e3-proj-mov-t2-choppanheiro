# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Luís Santos, de 28 anos, é um analista de marketing. Como entusiasta de happy hour, ele adora sair com os amigos para bares locais depois do trabalho. Luís deseja poder escanear o código QR da conta do bar para agilizar o processo de divisão da conta entre seus amigos. Além disso, ele valoriza ver as promoções e ofertas especiais do bar para economizar dinheiro e aproveitar ao máximo o momento. Luís também acha importante poder adicionar itens à conta do grupo para garantir que todos os pedidos sejam considerados na divisão final.

Isabela Ferreira, com 25 anos, é uma estudante de gastronomia. Como amante da culinária, ela gosta de experimentar diferentes bares locais com os amigos. Isabela deseja poder tirar fotos dos pratos no aplicativo para registrar os itens pedidos e facilitar a divisão precisa da conta. Além disso, ela valoriza receber sugestões de bares locais baseadas em avaliações gastronômicas, ajudando-a a descobrir novos lugares para experimentar com seus amigos. Isabela também quer a opção de dividir igualmente ou de acordo com o que cada um consumiu para atender às diferentes preferências de compartilhamento do grupo.

Rafael Oliveira, de 32 anos, é um empreendedor. Como alguém que gosta de socializar, ele adora organizar encontros com amigos em bares locais para ampliar sua rede de contatos. Rafael deseja criar um evento no aplicativo e convidar seus amigos para coordenar esses encontros de maneira mais eficiente. Além disso, ele valoriza a capacidade de verificar o histórico de encontros anteriores para lembrar onde foram e como foram divididos os gastos em cada evento. Rafael também acha importante poder incluir uma nota ou comentário junto à divisão da conta para manter a transparência com seus amigos.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Luís Santos         | quero poder escanear o código QR da conta do bar           | para agilizar o processo de divisão da conta entre meus amigos.               |
|Luís Santos         | quero ver as promoções e ofertas especiais do bar                | para economizar dinheiro e aproveitar ao máximo o happy hour. |
|Luís Santos         | quero poder adicionar itens à conta do grupo           | para garantir que todos os pedidos sejam considerados na divisão final.               |
|Isabela Ferreira    | quero poder tirar fotos dos pratos no aplicativo                | para registrar os itens pedidos e facilitar a divisão precisa da conta |
|Isabela Ferreira         | quero receber sugestões de bares locais baseadas em avaliações gastronômicas           | para descobrir novos lugares para experimentar com meus amigos.                |
|Isabela Ferreira        | quero ter a opção de dividir igualmente ou de acordo com o que cada um consumiu              | para atender às diferentes preferências de compartilhamento do grupo.
 |
|Rafael Oliveira        | Quero organizar os encontros da faculdade de acordo com oq cada um consome         | para coordenar encontros nos bares locais de forma mais eficiente.               |
|Rafael Oliveira         | quero ter a capacidade de verificar o histórico de encontros anteriores              | para lembrar onde fomos e como foram divididos os gastos em cada evento. |
|Rafael Oliveira         | quero poder incluir uma nota ou comentário junto à divisão da conta              | para lembrar o motivo de gastos específicos e manter a transparência com meus amigos. |


Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Atualmente, dividir a conta entre amigos durante encontros em bares ou restaurantes pode ser uma tarefa complicada e propensa a erros, o que pode levar a mal-entendidos e conflitos entre os participantes. Os principais problemas identificados na situação atual são os seguintes:

* Complexidade das Despesas: Em encontros sociais, os participantes geralmente fazem pedidos individuais com diferentes itens e preços. Calcular manualmente a parte de cada pessoa pode ser complicado e demorado, especialmente quando há variações nas taxas de serviço e impostos.

* Dificuldade de Rastreamento: Manter o controle dos itens pedidos por cada indivíduo e registrar os preços correspondentes pode ser desafiador, especialmente quando o grupo é grande e os pedidos são frequentes.

* Falhas na Comunicação: As preferências de pagamento e os limites financeiros nem sempre são claros entre os amigos, o que pode levar a desacordos sobre como a conta deve ser dividida.

* Risco de Conflitos: A divisão desigual ou injusta das despesas pode gerar descontentamento entre os participantes, resultando em conflitos e afetando negativamente a experiência social.

Modelo do Sistema Atual:

No cenário atual, a divisão da conta em um bar é geralmente realizada de forma manual, com os seguintes passos:

* Coleta de Pedidos: Cada pessoa faz o seu pedido e o garçom anota as escolhas de cada indivíduo.

* Registro de Preços: Os preços dos itens são registrados manualmente, considerando taxas e impostos, se aplicáveis.

* Cálculo Manual: Alguém do grupo assume a responsabilidade de calcular as partes individuais com base nos pedidos e preços registrados. Isso pode ser suscetível a erros humanos.

* Divisão de Pagamento: Os participantes contribuem com dinheiro para cobrir suas partes, sem garantia de que o cálculo tenha sido feito de maneira precisa e justa.

* Possíveis Discrepâncias: Se ocorrerem discrepâncias ou desentendimentos sobre a divisão, pode haver discussões ou até mesmo conflitos.

Proposta de Aplicativo Móvel:

Para abordar esses desafios, um aplicativo móvel dedicado à divisão de contas em bares pode ser uma solução inovadora. O aplicativo poderia oferecer as seguintes funcionalidades:

* Registro de Pedidos: Os participantes poderiam fazer seus pedidos individualmente no aplicativo, que registraria automaticamente os itens e preços.

* Cálculo Automático: Com base nos pedidos registrados, o aplicativo poderia calcular automaticamente as partes individuais, considerando taxas e impostos.

* Transparência: Os participantes poderiam visualizar claramente como o cálculo foi feito, promovendo transparência e evitando mal-entendidos.

* Histórico de Encontros: O aplicativo poderia manter um histórico de encontros anteriores e divisões de contas, facilitando referências futuras.

* Compartilhamento Fácil: Os participantes poderiam compartilhar facilmente os detalhes da divisão com seus amigos, evitando discussões posteriores. 

### Descrição Geral da Proposta

A proposta consiste no desenvolvimento e implementação de um aplicativo móvel inovador projetado para simplificar e otimizar a divisão de contas entre amigos durante encontros em bares e restaurantes. O aplicativo visa oferecer uma solução conveniente e precisa para calcular as partes individuais de cada participante, promovendo a transparência, evitando conflitos e melhorando a experiência social.

Limites da Proposta:
Este aplicativo se concentra exclusivamente na divisão de contas em encontros sociais em estabelecimentos de alimentação e bebidas. Ele não aborda outras funcionalidades relacionadas a planejamento de eventos, compartilhamento de despesas residenciais ou cálculos financeiros complexos. Além disso, o aplicativo não substitui o atendimento e a interação com os funcionários do local, mas sim complementa o processo de divisão de contas.

Ligações com Estratégias e Objetivos do Negócio:
A proposta está alinhada com as estratégias de proporcionar uma experiência positiva aos clientes e de aprimorar a eficiência dos processos. Ao resolver um desafio comum nas interações sociais em estabelecimentos comerciais, o aplicativo contribui para a satisfação dos clientes e para a promoção de relações harmoniosas entre amigos. Além disso, a implementação do aplicativo demonstra o compromisso do negócio com a inovação tecnológica e a busca por soluções práticas.

Oportunidades de Melhorias:

* Integração de Pagamentos: Além de calcular as partes individuais, o aplicativo pode ser aprimorado com a capacidade de realizar pagamentos diretos por meio de carteiras digitais ou serviços de pagamento online, simplificando ainda mais o processo.

* Recomendações Personalizadas: Com base em padrões anteriores de pedidos e preferências, o aplicativo poderia oferecer recomendações de pratos ou bebidas para os participantes, enriquecendo a experiência gastronômica.

* Integração com Redes Sociais: A possibilidade de compartilhar detalhes da divisão de contas através de redes sociais ou mensageiros populares pode facilitar a comunicação entre os amigos.

* Avaliações e Comentários: Os usuários poderiam avaliar e comentar sobre a experiência de usar o aplicativo, fornecendo feedback valioso para melhorias contínuas.

* Integração com Estabelecimentos: A colaboração com estabelecimentos para oferecer promoções ou descontos exclusivos aos usuários do aplicativo poderia ser uma vantagem adicional.

* Soluções para Grupos Grandes: Desenvolver funcionalidades específicas para lidar com grupos maiores, como ferramentas de votação para escolher restaurantes ou pedidos em grupo, poderia atender a uma variedade de cenários.

Em resumo, a proposta de desenvolver um aplicativo móvel para a divisão de contas em bares visa proporcionar uma solução eficaz para um desafio comum, alinhando-se às estratégias de melhorar a experiência do cliente e a eficiência dos processos. Há diversas oportunidades para aprimorar ainda mais o aplicativo e agregar valor aos usuários, contribuindo para o sucesso e a diferenciação do negócio no mercado.

### Processo 1 - Cálculo Automático das Partes Individuais

Nome do Processo: Cálculo Automático das Partes Individuais

Oportunidades de Melhorias:

* Personalização de Taxas e Gorjetas: Permitir que os usuários personalizem as taxas de serviço e gorjetas de acordo com suas preferências ou as políticas do estabelecimento.

* Divisão de Itens Compartilhados: Incluir a capacidade de dividir equitativamente os custos de itens compartilhados, como aperitivos ou uma garrafa de vinho.

* Revisão e Ajustes: Oferecer uma etapa de revisão onde os usuários possam verificar e ajustar manualmente as partes individuais antes de confirmar o cálculo.

* Arredondamento Inteligente: Implementar um sistema de arredondamento inteligente para evitar valores fracionados inconvenientes.

* Divisão Proporcional: Criar a opção de dividir os itens de acordo com a proporção de consumo de cada pessoa, levando em consideração os preços dos pedidos. 

![BPMN](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-choppanheiro/assets/89876269/8a9f6fb4-4734-4330-a394-21ab7fd2bd3e)

Descrição do modelo BPMN:

* Registrar Pedidos: Os participantes fazem seus pedidos individualmente através do aplicativo, que registra automaticamente os itens selecionados e seus preços.

* Calcular Partes: Com base nos pedidos registrados e nas configurações de taxas, o aplicativo calcula automaticamente as partes individuais de cada participante.

* Revisar e Ajustar: Os usuários têm a opção de revisar as partes calculadas e fazer ajustes manualmente, se necessário, para garantir precisão e personalização.

* Finalizar Divisão: Após revisões ou ajustes, os usuários confirmam a divisão, e o aplicativo fornece os valores finais a serem pagos por cada pessoa.

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O Aplicativo deverá ter uma interface intuitiva e de fácil utilização. | ALTA | 
|RNF-002| As informações apresentadas devem ser claras, legíveis e organizadas de forma a facilitar a compreensão. |  ALTA | 
|RNF-003| Durante a escolha de itens e cálculos de divisão, não deve haver atrasos perceptíveis. | MÉDIO |
|RNF-004| Os dados das contas e históricos de encontro devem ser armazenados de forma segura e acessível para os usuários. | ALTO |
|RNF-005| A aplicação deve ser projetada para atender às diretrizes de acessibilidade, tornando-a utilizável para pessoas com deficiências visuais ou outras limitações. | BAIXO |
|RNF-006| O aplicativo pode ser integrado a serviços de avaliação gastronômica, para fornecer recomendações e avaliações de restaurantes. | BAIXO |
|RNF-007| O aplicativo deve fornecer sugestões de bares e restaurantes com base na localização do usuário, ele deve ser capaz de rastrear a localização do usuário com precisão e respeitar as preferências de privacidade. | BAIXO |
|RNF-008| O aplicativo deve garantir consistência nos cálculos de divisão de contas, independentemente do número de pessoas no grupo ou dos itens pedidos. | ALTO |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 20/11/2023. |
|02| A equipe não pode subcontratar o desenvolvimento do trabalho. |
|03| O projeto não poderá ser entregue sem que as funcionalidades essenciais estejam prontas. |
|04| O projeto deve ser desenvolvido utilizando a linguagem de programação React Native. |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

![Diagrama-Caso-de_Uso](img/ChoppanheirosUseCase.png)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Matriz de Rastreabilidade (1)_page-0001](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-choppanheiro/assets/89876269/3c21c9ac-1c52-4404-82ba-e47947326942)


> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
