import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, } from 'react-native';
import {Botao, Input, handlerTeclado} from '../components/components';
import { useState } from 'react';

import { Cadastrar } from '../controller/controller';

export default function Cadastro() {

  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [vpass, setVPass] = useState();
  const [email, setEmail] = useState();

  const handleCadastro = () => {

    const credenciais = {
      user,
      pass,
      vpass,
      email
    }

    Cadastrar(credenciais)
    };



  <Input holder={'Usuário'} valor={user} onChangeText={setUser}></Input>

    return (
        <TouchableWithoutFeedback onPress={handlerTeclado}>
        <View style={styles.container}>
        <Image style={styles.img}
            source={require('../assets/Logo.png')}
          />
        
        <Text style={styles.text}>Usuário</Text>
        <Input holder='Insira seu usuário' valor={user} onChangeText={setUser}></Input>

        <Text style={styles.text}>E-mail</Text>
        <Input holder='Insira seu email' valor={email} onChangeText={setEmail}></Input>

        <Text style={styles.text}>Senha</Text>
        <Input holder='Insira sua senha' valor={pass} onChangeText={setPass}></Input>

        <Text style={styles.text}>Confirmar Senha</Text>
        <Input holder='Confirme sua senha' valor={vpass} onChangeText={setVPass}></Input>


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
        color:'white',
    
    },

    img: {
      marginBottom: 30,
      width: 240,
      height: 250, 
      marginTop: 50
      
    }

  });
  
