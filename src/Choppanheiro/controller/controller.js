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
export function Add(items){
    
  const apiURL = 'http://192.168.18.6:3000/pedidos'

  const dataAtual = new Date();
  const dataFormatada = dataAtual.toISOString();

  const dados ={
      item: items.item,
      preco: items.preco,
      valor: items.valor,
      dataCadastro: dataFormatada,
  };
  axios.post(apiURL, dados)
      .then((response) =>{
          console.log('Sucesso ao cadastrar', response.data);
      })
  
};
