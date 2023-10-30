import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import {Botao, Input, handlerTeclado, TextoBotao} from '../components/components';
import { useState } from 'react';

import Logar from '../controller/controller';


export default function Login() {


  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  const handleEntrar = () => {
    const credenciais = {
      user,
      pass
    }

    Logar(credenciais)
    };


    return (
      <TouchableWithoutFeedback onPress={handlerTeclado}>
        <View style={styles.container}>
        
        <Input holder={'Usuário'} valor={user} onChangeText={setUser}></Input>

        <Input holder={'Senha'} valor={pass} onChangeText={setPass}></Input>

        <Botao texto={'Entrar'} onPress={handleEntrar}></Botao>

        <TextoBotao onPress={tRecuperar} texto={'Esqueceu sua senha ?'}></TextoBotao>
  
        <StatusBar style="auto" />
      </View>
      </TouchableWithoutFeedback> 
    )
  }



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
  



