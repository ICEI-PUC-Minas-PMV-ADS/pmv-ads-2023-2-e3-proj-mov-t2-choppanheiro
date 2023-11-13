import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
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
          <Image style={styles.img}
            source={require('../assets/Logo.png')}
          />
  
        <Botao texto={'LOGIN'} onPress={tLogin} style={{width:229, marginBottom:5}}></Botao>
        <Botao texto={'CRIAR CONTA'} onPress={tCadastro} style={{width:229, marginBottom:5}}></Botao>
  
  
        <StatusBar style="auto" />
      </View>
    )
  };



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#410404',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      marginBottom: 40,
      width: 240,
      height: 250,      
      
    }
  });
  
