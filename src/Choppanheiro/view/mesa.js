import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, TouchableWithoutFeedback, Alert } from "react-native";
import { Botao, ModalInput } from "../components/components";
import { useNavigation } from "@react-navigation/native";
import { enviaConta } from "../controller/controller";
import { useState } from 'react';

export default function Mesa({route}) {
  const navigation = useNavigation();


  const [modalPessoasVisible, setModalPessoasVisible] = useState(false);
  const [modalGorjetaVisible, setModalGorjetaVisible] = useState(false);
  const [modalCouverVisible, setModalCouverVisible] = useState(false);

  //Variaveis de dados NAO MEXER!!!
  const { params } = route || {}; // Destructure params safely

  // Access listaItens from the params object
  const listaItens = params ? params.listaItens : [];

  const [pessoas, setPessoas] = useState(1)
  const [gorjeta, setGorjeta] = useState(0)
  const [couver, setCouver] = useState(0)

  const abrirModalPessoas = () => {
    setModalPessoasVisible(true);
  };
  const abrirModalGorjeta = () => {
    setModalGorjetaVisible(true);
  };
  const abrirModalCouver = () => {
    setModalCouverVisible(true);
  };

  const fecharModais = () => {
    setModalPessoasVisible(false);
    setModalGorjetaVisible(false);
    setModalCouverVisible(false);
  };

  const confirmarPessoas = (valor) => {
    setPessoas(valor)
    fecharModais();
  };

  const confirmarGorjeta = (valor) => {
    setGorjeta(valor)
    fecharModais();
  };

  const confirmarCouver = (valor) => {
    setCouver(valor)
    fecharModais();
  };

  const handleGalera = async () => {
    try {
     const dataAtual = new Date();
     const dataFormatada = dataAtual.toISOString().split('T')[0];

     const dadosPedido = {
      pessoas,
      gorjeta,
      couver,
      listaItens: listaItens || [],  // Certifique-se de que listaItens não seja undefined
      dataFormatada,
    };


    if(dadosPedido.pessoas === 1 ){
      Alert.alert('Pera lá meu amigo!', 'Informe o numero de pessoas.');
      return
    }

    await enviaConta(dadosPedido)
    navigation.navigate('Galera')
  } catch (error) {
    console.error('Erro ao cadastrar pedido', error)
  }
}


  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Image style={styles.img} source={require('../assets/Vector.png')} />

          <View style={styles.rowContainer}>
            <Botao
              texto={'N° PESSOAS'}
              style={{ width: '82%' }}
              onPress={abrirModalPessoas}
            />
          </View>

          <View style={[styles.rowContainer]}>
            <Botao
              texto={'GORJETA'}
              style={{ margin: 5, width: '40%' }}
              onPress={abrirModalGorjeta}
            />
            <Botao
              texto={'COUVER'}
              style={{ width: '40%' }}
              onPress={abrirModalCouver}
            />
          </View>

          <View style={styles.rowContainer}>
            <Botao texto={'GALERA'} style={{ width: '82%' }} onPress={handleGalera} />
          </View>

          <View style={styles.rowContainer}>
            <Botao texto={'FAZ A BOA'} style={{ width: '82%' }}  />
          </View>
        </View>

        {/* Modais */}
        <ModalInput
          visible={modalPessoasVisible}
          onClose={fecharModais}
          onConfirm={confirmarPessoas}
          title={'Número de Pessoas'}
          placeholder={'Insira o número de pessoas'}
        />

        <ModalInput
          visible={modalGorjetaVisible}
          onClose={fecharModais}
          onConfirm={confirmarGorjeta}
          title={'Valor da Gorjeta'}
          placeholder={'Insira o valor da gorjeta'}
        />

        <ModalInput
          visible={modalCouverVisible}
          onClose={fecharModais}
          onConfirm={confirmarCouver}
          title={'Valor do Couvert'}
          placeholder={'Insira o valor do couvert'}
        />

      </View>
    </TouchableWithoutFeedback>
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
