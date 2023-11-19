import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export function Logar(credenciais, navigation) {
  const apiURL = "http://192.168.18.6:3000/usuarios";

  axios.get(apiURL).then((response) => {
    const userData = response.data;

    console.log(userData);

    const validaLogin = userData.find(
      (item) =>
        (credenciais.user === item.user) & (credenciais.pass === item.pass)
    );

    if (validaLogin) {
      console.log("====ENTROU===");
      navigation.navigate("Principal");
    } else {
      console.log("===FALHOU===");
    }
  });
}

export function Cadastrar(credenciais) {
  const apiURL = "http://192.168.18.6:3000/usuarios";

  axios.get(apiURL).then((response) => {
    const userData = response.data;

    const dados = {
      email: credenciais.email,
      pass: credenciais.pass,
      user: credenciais.user,
      vpass: credenciais.vpass,
    };

    const validaUsuario = userData.find(
      (item) =>
        credenciais.user === item.user || credenciais.email === item.email
    );

    if (validaUsuario) {
      // Usuario ou Email Já existe
    } else {
      axios.post(apiURL, dados);
      //Usuario foi cadastrado com sucesso
    }
  });
}
export function Add(items) {
  const apiURL = "http://192.168.18.6:3000/pedidos";

  const dataAtual = new Date();
  const dataFormatada = dataAtual.toISOString();

  const dados = {
    item: items.item,
    preco: items.preco,
    qtd: items.qtd,
    dataCadastro: dataFormatada,
  };

  axios.get(apiURL)
    .then((response) => {
      const itemExistente = response.data.find((item) => {
        return item.item === items.item && item.preco === items.preco;
      });

      if (itemExistente) {
        // Cria um novo objeto mantendo os dados existentes, apenas atualizando a quantidade
        const novoItem = {
          ...itemExistente,
          qtd: itemExistente.qtd + items.qtd,
        };

        // Atualiza apenas a quantidade usando uma solicitação PUT
        return axios.put(`${apiURL}/${itemExistente.id}`, novoItem);
      } else {
        // Se não existir, adiciona um novo item
        return axios.post(apiURL, dados);
      }
    })
    .then((response) => {
      const { item, preco, dataCadastro, id } = response.data;
      console.log(`Sucesso ao cadastrar ou atualizar. Item: ${item}, Preço: ${preco}, Data de Cadastro: ${dataCadastro}, ID: ${id}`, response.data);
    })
    .catch((error) => {
      console.error("Erro ao cadastrar ou atualizar", error);
    });
}
export async function getPedidos() {
  const apiURL = "http://192.168.18.6:3000/pedidos";

  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    console.error("Erro ao recuperar dados dos pedidos", error);
    throw error;
  }
}


export function AtualizarDados(credenciais, novasCredenciais) {
  const apiURL = "http://192.168.18.6:3000/usuarios";

  axios
    .get(apiURL)
    .then((response) => {
      const userData = response.data;

      const validaUsuario = userData.find(
        (item) =>
          credenciais.user === item.user && credenciais.pass === item.pass
      );

      if (validaUsuario) {
        // Usuário validado, agora atualizamos os dados
        axios
          .put(`${apiURL}/${validaUsuario.id}`, novasCredenciais)
          .then(() => {
            console.log("Dados do usuário atualizados com sucesso!");
            alert("Dados do usuário atualizados com sucesso!");
          })
          .catch((error) => {
            console.error("Erro ao atualizar os dados do usuário:", error);
            alert("Erro ao atualizar os dados do usuário.");
          });
      } else {
        console.log("===FALHOU===: Nome de usuário ou senha incorretos");
        alert("Nome de usuário ou senha incorretos.");
      }
    })
    .catch((error) => {
      console.error("Erro ao buscar os dados do usuário:", error);
      alert("Erro ao buscar os dados do usuário.");
    });
}
