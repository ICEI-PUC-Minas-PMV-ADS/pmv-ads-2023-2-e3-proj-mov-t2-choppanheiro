import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Botao,
  Input,
  handlerTeclado,
  TextoBotao,
} from "../components/components";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Logar } from "../controller/controller";

export default function Login() {
  const navigation = useNavigation();
  const tRecuperar = () => {
    navigation.navigate("Recuperar");
  };

  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  const handleEntrar = () => {
    const credenciais = {
      user,
      pass,
    };

    Logar(credenciais, navigation);
  };

  return (
    <TouchableWithoutFeedback onPress={handlerTeclado}>
      <View style={styles.container}>
        <Image style={styles.img} source={require("../assets/Logo.png")} />

        <Input holder={"Usuário"} valor={user} onChangeText={setUser}></Input>

        <Input holder={"Senha"} valor={pass} onChangeText={setPass}></Input>

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
