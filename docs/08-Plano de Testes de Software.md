# Plano de Testes de Software

Os requisitos para realização dos testes de software são: 

- Aplicativo disponível para utilizar em Android e IOS
- Smartphones (Android e/ou IOS), ou emulador Mobile.
- Conectividade de Internet para acesso ao aplicativo e às plataformas (APISs).

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

|    Caso de teste    | CT-01 - Cadastro de Usuário|
|:---:	|:---:	|
| Requisito Associado |RF-01 - O aplicativo deve possibilitar o cadastro de usuários.|
|  Objetivo do Teste  |Verificar a funcionalidade de criar uma nova conta de usuário no aplicativo.|
|        Passos       |Acessar o aplicativo.<br> - Pressionar o botão “Nova Conta”.<br> - Preencher os campos de registro necessários.<br> - Pressionar o botão “Concluir Registro”.|
|  Critério de Êxito  |Mensagem de notificação de cadastro realizado com sucesso.|
|  	|  	|
|    Caso de teste    | CT-02 - Login de um usuário|
| Requisito Associado |RF-02 - O aplicativo deve permitir o login na conta cadastrada mediante usuário e senha.|
|  Objetivo do Teste  |realizar a autenticação utilizando os dados de usuários cadastrado.|
|        Passos       |Acessar o aplicativo.<br> - Pressionar o botão “Login”.<br> - Preencher os campos de identificação e senha.<br> - Pressionar o botão “Concluir Registro”. |
|  Critério de Êxito  |Mensagem de notificação de login realizado com sucesso ou usuário não cadastrado.|
|  	|  	|
|    Caso de teste    |CT-03 - Adicionar itens consumidos pelo usuário.|
| Requisito Associado |RF-03 - O aplicativo deve permitir que o usuário adicione a sua comanda os itens que consumiu.|
|  Objetivo do Teste  |Verificar a funcionalidade de adicionar itens consumidos pelo usuário.|
|        Passos       |Usuário devidamente logado e participando de uma mesa aberta (pré-requisito).<br> - Pressionar o botão “adicionar itens”.<br> - Preencher informações do item a ser adicionado.<br> - Pressionar o botão “Adicionar”.|
|  Critério de Êxito  |Item corretamente adicionado.|
|  	|  	|
|    Caso de teste    |CT-04 - Acompanhar gastos em tempo real|
| Requisito Associado |RF-04 - O aplicativo deve permitir que o usuário tenham a capacidade de monitorar em tempo real o valor de cada item consumido. |
|  Objetivo do Teste  |Verificar a Funcionalidade de acompanhamento de gastos em tempo real.|
|        Passos       |Usuário devidamente logado e participando de uma mesa aberta (pré-requisito).<br> - Visualizar os gastos conforme estão dispostos na tela.|
|  Critério de Êxito  |Todos os valores estão sendo mostrados e estão corretos e atualizados em tempo real.|
|  	|  	|
|    Caso de teste    |CT-05 - Visualizar os gastos quando a mesa for finalizado.|
| Requisito Associado |RF-05 - O aplicativo deve informar ao usuário o total gasto pela mesa assim que ele encerrar a conta. |
|  Objetivo do Teste  |Verificar a funcionalidade de encerramento de conta da mesa.|
|        Passos       |Usuário devidamente logado e ter participado de uma mesa aberta (pré-requisito).|
|  Critério de Êxito  | Será possível ver o(s) valor(es) dos gastos por mesa encerrada. |
|  	|  	|
|    Caso de teste    |CT-06 - Escolher formas de divisão de contas.|
| Requisito Associado |RF-06 aplicativo deve ser capaz de realizar a divisão da conta de duas formas: igualmente entre todos os membros do grupo ou individualmente.|
|  Objetivo do Teste  |Verificar a funcionalidade de formas de divisão de contas.|
|        Passos       |Usuário devidamente logado e participando de uma mesa aberta (pré-requisito).<br> - Selecionar a opção “Fechar Conta” e escolhar "Faz a boa" ou "Galera".|
|  Critério de Êxito  |A mesa será encerrada e o(s) valor(es) de gastos será alocada ao(s) usuários(s) corretamente.|
|  	|  	|
|    Caso de teste    |CT-07 - Adição de gorjeta e Couvert|
| Requisito Associado |RF-09 - O aplicativo deve permitir que o usuário possa adicionar uma quantia para gorjeta ou couvert à conta. Essa quantia será incluída na divisão final da conta..|
|  Objetivo do Teste  |Verificar a funcionalidade de adição de valores de gorjeta e couvert|
|        Passos       |Usuário devidamente logado e participando de uma mesa aberta (pré-requisito).<br> |
|  Critério de Êxito  |valores adicionado a comanda corretamente.|
|  	|  	|
|    Caso de teste    | CT-08 - Visualização de histórico de divisões.|
| Requisito Associado | RF-12 - O aplicativo deve permitir que o usuário acesse um histórico de encontros anteriores, fornecendo uma visão geral dos locais visitados e como os custos foram divididos em cada evento, permitindo ao usuário um melhor controle financeiro e uma revisão dos itens consumidos nos locais frequentados. |
|  Objetivo do Teste  | Verificar a funcionalidade de histórico de divisões do usuário. |
|        Passos       | Usuário devidamente logado(pré-requisito).<br> - Selecionar o menu “histórico”.<br> - Selecionar um item do histórico.|
|  Critério de Êxito  | Visualização geral e individual dos itens dos histórico funcional e condizente com o que foi feito naquela divisão. |
|  	|  	|
|    Caso de teste    | CT-09 - Criação de uma Mesa |
| Requisito Associado | RF-14 - O aplicativo deve permitir que o usuário criem uma mesa, incluir o numero de pessoas e encerrar a conta. |
|  Objetivo do Teste  | Verificar a funcionalidade de criação de mesas |
|        Passos       | Usuário devidamente logado (pré-requisito).<br> - pressionar o botão “Nova Mesa”.|
|  Critério de Êxito  | Criação de uma nova Mesa. |
|  	|  	|
|    Caso de teste    | CT-10 - Adição de outros usuários em uma Mesa |
| Requisito Associado | RF-14 - O aplicativo deve permitir que os usuários criem uma mesa, incluir usuários nela e encerrar a conta.|
|  Objetivo do Teste  | Verificar a funcionalidade de adicionar usuários a uma Mesa criada.|
|        Passos       | Usuário devidamente logado e com uma mesa aberta (pré-requisito).<br> - Pressionar o botão “Adicionar Choppanheiro”.<br> - Selecionar usuário que será adicionado. |
|  Critério de Êxito  | A inclusão bem-sucedida de um usuário na mesa aberta.|

## Ferramentas de Testes (Opcional)

N/A
