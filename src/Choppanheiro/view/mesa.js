import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Botao} from '../components/components';
import { useNavigation } from '@react-navigation/native';




export default function Mesa() {

  const navigation = useNavigation();

  const tLogin = () => {
    navigation.navigate('Login')
  };

  const tCadastro = () => {
    navigation.navigate('Cadastro')
  }

    return (
        <View style={styles.container}>

  
        <Botao texto={'NO DE PESSOAS'} /*onPress={tCadastro}*/ ></Botao>
        <Botao texto={'COUVERT'} /*onPress={tCadastro}*/ ></Botao>
        <Botao texto={'GORJETA'} /*onPress={tCadastro}*/ ></Botao>
        <Botao texto={'FAZ A BOA'} /*onPress={tCadastro}*/ ></Botao>
        <Botao texto={'GALERA'} /*onPress={tCadastro}*/ ></Botao>
  
  
        <StatusBar style="auto" />
      </View>
    )
  };



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  
