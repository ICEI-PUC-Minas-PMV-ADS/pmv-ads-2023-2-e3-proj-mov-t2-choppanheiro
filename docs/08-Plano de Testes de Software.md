# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

|    Caso de teste    | CT-01 - Cadastro de Perfil de Usuário|
|:-------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Requisito Associado |RF-01 - O aplicativo deve possibilitar o cadastro de usuários.|
|  Objetivo do Teste  |Verificar a funcionalidade de criar uma nova conta de usuário no aplicativo.|
|        Passos       |Acessar o aplicativo.<br> - Pressionar o botão “Entrar”.<br> - Pressionar o botão “Nova Conta”.<br> - Preencher os campos de registro necessários.<br> - Pressionar o botão “Concluir Registro”. |
|  Critério de Êxito  |O cadastro foi efetivado.|

|    Caso de teste    | CT-02 - Login de um usuário|
|:-------------------:|:--------------------------------------------------------------------------------------------------------------------------------------:|
| Requisito Associado |RF-02 - O aplicativo deve permitir o login na conta cadastrada mediante usuário e senha.|
|  Objetivo do Teste  |Verificar a funcionalidade de realizar o login do usuário no aplicativo.|
|        Passos       |Acessar o aplicativo.<br> - Pressionar o botão “Entrar”.<br> - Preencher os campos de identificação e senha.<br> - Pressionar o botão “Concluir Registro”. |
|  Critério de Êxito  |A tentativa de login for aceita ou negada caso os dados de login estejam corretos ou incorretos, respectivamente.|

|    Caso de teste    |CT-03 - Adicionar itens consumidos pelo usuário.|
|:-------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Requisito Associado |RF-03 - O aplicativo deve permitir a cada usuário anotar os itens que consumiu.|
|  Objetivo do Teste  |Verificar a funcionalidade de adicionar itens consumidos pelo usuário.|
|        Passos       |Usuário devidamente logado e participando de uma mesa aberta (pré-requisito).<br> - Pressionar o botão “+”.<br> - Preencher informações do item a ser adicionado.<br> - Pressionar o botão “Adicionar”.|
|  Critério de Êxito  |Item corretamente adicionado.|

|    Caso de teste    |CT-04 - Acompanhar gastos em tempo real|
|:-------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Requisito Associado |RF-04 - O aplicativo deve permitir que os usuários tenham a capacidade de monitorar em tempo real o valor de sua conta individual a cada item consumido. |
|  Objetivo do Teste  |Verificar a Funcionalidade de acompanhamento de gastos em tempo real.|
|        Passos       |Usuário devidamente logado e participando de uma mesa aberta (pré-requisito).<br> - Visualizar os gastos conforme estão dispostos na tela.|
|  Critério de Êxito  |Todos os valores estão sendo mostrados e estão corretos e atualizados em tempo real.|

|    Caso de teste    |CT-05 - Visualizar os gastos quando a mesa for finalizado.|
|:-------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------:|
| Requisito Associado |RF-05 - O aplicativo deve informar aos usuários o total gasto pela mesa assim que ele encerrar a conta. |
|  Objetivo do Teste  |Verificar a funcionalidade de encerramento de conta da mesa.|
|        Passos       |Usuário devidamente logado e ter participado de uma mesa aberta (pré-requisito).|
|  Critério de Êxito  | Será possível ver o(s) valor(es) dos gastos por mesa encerrada. |

|    Caso de teste    |CT-06 - Escolher formas de divisão de contas.|
|:-------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------:|
| Requisito Associado |RF-06O aplicativo deve ser capaz de realizar a divisão da conta de duas formas: igualmente entre todos os membros do grupo ou individualmente.|
|  Objetivo do Teste  |Verificar a funcionalidade de formas de divisão de contas.|
|        Passos       |Usuário devidamente logado e participando de uma mesa aberta (pré-requisito).<br> - Selecionar a opção “Fechar Conta” e escolhar "Faz a boa" ou "Galera".|
|  Critério de Êxito  |A mesa será encerrada e o(s) valor(es) de gastos será alocada ao(s) usuários(s) corretamente.|









|    Caso de teste    |                                          CT-00 - Criação de uma Mesa                                         |
|:-------------------:|:------------------------------------------------------------------------------------------------------------:|
| Requisito Associado | RF-14 - O aplicativo deve permitir que os usuários criem uma mesa, incluir usuários nela e encerrar a conta. |
|  Objetivo do Teste  |                                Verificar a funcionalidade de criação de mesas                                |
|        Passos       |                  - Usuário devidamente logado (pré-requisito).<br> - pressionar o botão “Nova Mesa”.                  |
|  Critério de Êxito  |                                           Criação de uma nova Mesa.                                           |

|    Caso de teste    |                                                     CT-04 - Adição de outros usuários em uma Mesa                                                     |
|:-------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|
| Requisito Associado |                      RF-14 - O aplicativo deve permitir que os usuários criem uma mesa, incluir usuários nela e encerrar a conta.                     |
|  Objetivo do Teste  |                                          Verificar a funcionalidade de adicionar usuários a uma Mesa criada.                                          |
|        Passos       | - Usuário devidamente logado e com uma mesa aberta (pré-requisito).<br> - Pressionar o botão “Adicionar Choppanheiro”.<br> - Selecionar usuário que será adicionado. |
|  Critério de Êxito  |                                                 A inclusão bem-sucedida de um usuário na mesa aberta.                                                 |

                               |







|    Caso de teste    |                                                   CT-07 - Selecionar Método de divisão da conta.                                                  |
|:-------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------:|
| Requisito Associado | RF-06 - O aplicativo deve ser capaz de realizar a divisão da conta de duas formas: igualmente entre todos os membros do grupo ou individualmente. |
|  Objetivo do Teste  |                                        Verificar a funcionalidade de seleção de método de divisão de conta.                                       |
|        Passos       |   - Usuário devidamente logado e participando de uma mesa aberta (pré-requisito).<br> - Selecionar a opção “Método de divisão” e trocar o método atual.   |
|  Critério de Êxito  |                                 A divisão de gastos muda e recalcula os valores de todos os usuários corretamente.                                |

|    Caso de teste    |                                                                    CT-08 - Escanear Conta via QR                                                                    |
|:-------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Requisito Associado |                               RF-07 - O aplicativo deve permitir que os usuários possam escanear o QR Code da conta para conferência.                               |
|  Objetivo do Teste  |                                                        Verificar se a funcionalidade de scan de conta via QR                                                        |
|        Passos       | - Usuário devidamente logado e participando de uma mesa aberta (pré-requisito).<br> - Ativar a funcionalidade de scan através do aplicativo.<br> - Escanear o código QR da conta. |
|  Critério de Êxito  |                                                                     Scan Realizado corretamente.                                                                    |

|    Caso de teste    |                                                                                                                                    CT-09 - Visualização de histórico de divisões.                                                                                                                                   |
|:-------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Requisito Associado | RF-12 - O aplicativo deve permitir que os usuários acessem um histórico de encontros anteriores, fornecendo uma visão geral dos locais visitados e como os custos foram divididos em cada evento, permitindo aos usuários um melhor controle financeiro e uma revisão dos itens consumidos nos locais frequentados. |
|  Objetivo do Teste  |                                                                                                                           Verificar a funcionalidade de histórico de divisões do usuário.                                                                                                                           |
|        Passos       |                                                                                                      - Usuário devidamente logado(pré-requisito).<br> - Selecionar o menu “histórico”.<br> - Selecionar um item do histórico.                                                                                                     |
|  Critério de Êxito  |                                                                                                 Visualização geral e individual dos itens dos histórico funcional e condizente com o que foi feito naquela divisão.                                                                                                 |

## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
