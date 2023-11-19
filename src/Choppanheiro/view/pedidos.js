import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Modal } from 'react-native';
import {Botao, Profile, Pedido, BotaoComanda, Comanda} from '../components/components';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function Item (){
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
      setModalVisible(!modalVisible);
    };
    //Modal comanda
    const [modalComanda, setModalComanda] = useState(false);
    const toggleComanda =() =>{
      setModalComanda(!modalComanda);
    };
      return(
        <View style={styles.container}>
          <Image style={styles.img}
            source={require('../assets/Vector.png')}
          />          
          <Botao texto={'ADICIONAR ITEM'} onPress={toggleModal}/>
          <Modal transparent={true} animationType='slide' visible={modalVisible}>
            <View style={styles.containerModal}>
              <Pedido onPress={toggleModal}></Pedido>
                         
           </View>
          </Modal>
          <Botao style ={styles.botao} texto={'FECHAR CONTA'}/>
          <BotaoComanda style ={styles.botaoComanda} texto={'COMANDA'} onPress={toggleComanda}/>
          
            <Modal visible={modalComanda} transparent={true} animationType='slide'>
            <View style={styles.containerModal}>
            <Comanda onPress={toggleComanda}></Comanda>
            </View>
            </Modal>
         
          

          
          <Profile width={'100%'} bgColor={'#F2A60C'}></Profile>
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
    marginTop: 100,
    marginBottom: 0
  },
  containerModal:{
    margin: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});