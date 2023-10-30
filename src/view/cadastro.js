import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import {Botao, Input, handlerTeclado} from '../components/components';
import Principal from './principal';
import { useState } from 'react';

import Cadastrar from '../controller/controller'

export default function Cadastro() {

  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [email, setEmail] = useState();

  const handleCadastro = () => {
    const credenciais = {
      user,
      pass,
      email
    }

    Cadastrar(credenciais)
    };



  <Input holder={'Usuário'} valor={user} onChangeText={setUser}></Input>

    return (
        <TouchableWithoutFeedback onPress={handlerTeclado}>
        <View style={styles.container}>

        
        <Text style={styles.text}>Usuário</Text>
        <Input holder='Insira seu usuário' valor={user} onChangeText={setUser}></Input>

        <Text style={styles.text}>E-mail</Text>
        <Input holder='Insira seu email' valor={email} onChangeText={setEmail}></Input>

        <Text style={styles.text}>Senha</Text>
        <Input holder='Insira sua senha' valor={pass} onChangeText={setPass}></Input>

        <Text style={styles.text}>Confirmar Senha</Text>
        <Input holder='Confirme sua senha'></Input>


        <Botao texto={'CRIAR CONTA'} onPress={handleCadastro} ></Botao>

       
  
  
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
  
