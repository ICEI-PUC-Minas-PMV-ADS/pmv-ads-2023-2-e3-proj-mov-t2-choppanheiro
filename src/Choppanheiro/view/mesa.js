import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View, Modal } from "react-native";
import { Botao, NumeroPessoas, Gorjeta, Couver } from "../components/components";
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';

export default function Mesa() {
  const navigation = useNavigation();
  const [modalPessoa, setModalPessoa] = useState(false);
  const toggleModalPessoa = () => {
    setModalPessoa(!modalPessoa);
  };
  const [modalGorjeta, setModalGorjeta] = useState(false);
  const toggleGorjeta = () => {
    setModalGorjeta(!modalGorjeta);
  };
  const [modalCouver, setModalCouver] = useState(false);
  const toggleCouver = () => {
    setModalCouver(!modalCouver); // Corrigindo o nome da função aqui
  };

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
      <View style={{ alignItems: "center" }}>
        <Image style={styles.img} source={require('../assets/Vector.png')} />

        <View style={styles.rowContainer}>
          <Botao texto={"N° PESSOAS"} style={{ width: '82%' }} onPress={toggleModalPessoa}/>
          <Modal visible={modalPessoa} animationType='slide' transparent={true}>
            <View style={styles.containerModal}>
              <NumeroPessoas onPress={toggleModalPessoa}/>
            </View>
          </Modal>
        </View>

        <View style={[styles.rowContainer]}>
          <Botao  texto={"GORJETA"} style={{margin: 5, width: '40%'}} onPress={toggleGorjeta}/>
          <Modal transparent={true} visible={modalGorjeta} animationType='fade'>
            <View style={styles.containerModal}>
              <Gorjeta onPress={toggleGorjeta}/>
            </View>
          </Modal>

          <Botao texto={"COUVER"} style={{width: '40%'}} onPress={toggleCouver}/>
          <Modal transparent={true} visible={modalCouver} animationType='fade'>
            <View style={styles.containerModal}>
              <Couver onPress={toggleCouver}/>
            </View>
          </Modal>
        </View>

        <View style={styles.rowContainer}>
          <Botao
            texto={"GALERA"}
            style={{ width: '82%' }} /*onPress={tCadastro}*/
          />
        </View>

        <View style={styles.rowContainer}>
          <Botao texto={"FAZ A BOA"}
            style={{ width: '82%' }} /*onPress={tPedido}*/
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30
  },
  containerModal:{
    margin: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
