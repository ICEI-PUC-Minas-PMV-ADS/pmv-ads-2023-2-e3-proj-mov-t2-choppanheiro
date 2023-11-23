import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Modal } from 'react-native';
import { Botao, Pedido, BotaoComanda, Comanda } from '../components/components';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function Item() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  
  const [modalComanda, setModalComanda] = useState(false);
  const toggleComanda = () => {
    setModalComanda(!modalComanda);
  };

  const fecharConta = () => {
    navigation.navigate('Mesa');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/Vector.png')} />
      <Botao texto={'ADICIONAR ITEM'} onPress={toggleModal} />
      <Modal transparent={true} animationType='slide' visible={modalVisible}>
        <View style={styles.containerModal}>
          <Pedido onPress={toggleModal} />
        </View>
      </Modal>
      <Botao style={styles.botao} texto={'FECHAR CONTA'} onPress={fecharConta} />
      <BotaoComanda style={styles.botaoComanda} texto={'COMANDA'} onPress={toggleComanda} />
      <Modal visible={modalComanda} transparent={true} animationType='slide'>
        <View style={styles.containerModal}>
          <Comanda onPress={toggleComanda} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao:{
    width:210,
    marginTop: 20,
    justifyContent: 'center',
  },
  botaoComanda:{
    width:210,
    marginTop: 20,
    justifyContent: 'center',
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 0
  },
  containerModal:{
    margin: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
