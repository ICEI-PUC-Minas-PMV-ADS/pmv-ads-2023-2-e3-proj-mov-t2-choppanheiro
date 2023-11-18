import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Botao, Profile } from "../components/components";
import { useNavigation } from "@react-navigation/native";

import { Modal } from "../components/components";

export default function Mesa() {
  const navigation = useNavigation();

  const tLogin = () => {
    navigation.navigate("Login");
  };

  const tCadastro = () => {
    navigation.navigate("Cadastro");
  };
  const tPedido = () => {
    navigation.navigate("Pedido");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          position: "absolute",
          padding: 20,
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
        }}
      >
        {/* Linha 1 */}
        <View style={styles.rowContainer}>
          <Modal texto={"No DE PESSOAS"} style={{ width: 229 }} holder={'INSIRA O NUMERO DE PESSOAS'}></Modal>
        </View>

        {/* Linha 2 */}
        <View style={styles.rowContainer}>
          <Modal texto={'COUVERT'} style={{margin: 1}} holder={'INSIRA O VALOR DO COUVERT'}></Modal>
          <Modal texto={'GORJETA'} holder={'INSIRA O VALOR DA GORJETA'}></Modal>
        </View>

        {/* Linha 3 */}
        <View style={styles.rowContainer}>
          <Botao
            texto={"FAZ A BOA"}
            style={{ width: 229 }} onPress={tPedido}
          />
        </View>

        {/* Linha 4 */}
        <View style={styles.rowContainer}>
          <Botao
            texto={"GALERA"}
            style={{ width: 229 }} /*onPress={tCadastro}*/
          />
        </View>
      </View>
      {/* Último Botão */}
      <Profile
        width={"100%"}
        bgColor={"#F2A60C"}
        navigation={navigation}
      ></Profile>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  lastButtonContainer: {
    width: "100%",
    backgroundColor: "#F2A60C",
    marginTop: "auto", // Empurra o último botão para o final da tela
  },
});
