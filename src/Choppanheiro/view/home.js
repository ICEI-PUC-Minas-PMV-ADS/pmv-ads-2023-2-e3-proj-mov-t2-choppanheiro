import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Botao} from '../components/components';
import { useNavigation } from '@react-navigation/native';



export default function Home() {

  const navigation = useNavigation();

  const tLogin = () => {
    navigation.navigate('Login')
  }

  const tCadastro = () => {
    navigation.navigate('Cadastro')
  }
    
  

    return (
        <View style={styles.container}>

  
        <Botao texto={'LOGIN'} onPress={tLogin} ></Botao>
        <Botao texto={'CRIAR CONTA'} onPress={tCadastro} ></Botao>
  
  
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
  
