import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import {Botao, Input, handlerTeclado} from '../components/components';
import { useNavigation } from '@react-navigation/native';
import Principal from './principal';




export default function Cadastro() {

  const navigation = useNavigation();

  const tPrincipal = () => {
    navigation.navigate('Principal')
  };

    return (
        <TouchableWithoutFeedback onPress={handlerTeclado}>
        <View style={styles.container}>

        
        <Text style={styles.text}>Usuário</Text>
        <Input holder='Insira seu usuário'></Input>
        <Text style={styles.text}>E-mail</Text>
        <Input holder='Insira seu email'></Input>
        <Text style={styles.text}>Senha</Text>
        <Input holder='Insira sua senha'></Input>
        <Text style={styles.text}>Confirmar Senha</Text>
        <Input holder='Confirme sua senha'></Input>


        <Botao texto={'CRIAR CONTA'} onPress={tPrincipal} ></Botao>

       
  
  
        <StatusBar style="auto" />
      </View>
      </TouchableWithoutFeedback>
    )
  };



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#410404',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
        fontSize: 16,
        color:'white'
    }

  });
  
