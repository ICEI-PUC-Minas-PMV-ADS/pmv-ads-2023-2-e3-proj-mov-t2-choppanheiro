import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback, Alert
} from "react-native";
import {
  Botao,
  Input,
  handlerTeclado,
  TextoBotao, InputSecure
} from "../components/components";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Logar } from "../controller/controller";

export default function Login() {
  const navigation = useNavigation();
  const tRecuperar = () => {
    navigation.navigate("Recuperar");
  };

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleEntrar = async () => {
    const credenciais = {
      user,
      pass,
    };

    try {
      const loginBemSucedido = await Logar(credenciais, navigation);

      if (!loginBemSucedido) { Alert.alert('Login bem-sucedido', 'Você entrou com sucesso!');
      } else {
        Alert.alert('Erro no Login', 'Verifique suas credenciais e tente novamente.');
      }
    } catch (error) {
      console.error('Erro durante o login', error);
      Alert.alert('Erro no Login', 'Ocorreu um erro durante o login. Por favor, tente novamente.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlerTeclado}>
      <View style={styles.container}>
        <Image style={styles.img} source={require("../assets/Logo.png")} />

        <Input holder={"Usuário"} valor={user} onChangeText={setUser}></Input>

        <InputSecure holder={"Senha"} valor={pass} onChangeText={setPass}></InputSecure>

        <Botao
          texto={"Entrar"}
          onPress={handleEntrar}
          style={{ width: 229, marginBottom: 5 }}
        ></Botao>

        <TextoBotao
          onPress={tRecuperar}
          texto={"Esqueceu sua senha ?"}
        ></TextoBotao>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#410404",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 16,
    color: "white",
  },
  img: {
    marginBottom: 30,
    width: 240,
    height: 250,
    marginTop: 50,
  },
});
