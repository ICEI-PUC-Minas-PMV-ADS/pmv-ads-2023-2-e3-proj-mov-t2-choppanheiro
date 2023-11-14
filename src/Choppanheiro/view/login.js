import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import {Botao, Input, handlerTeclado, TextoBotao} from '../components/components';
import { useState, useEffect } from 'react';

import { FIREBASE_AUTH } from '../Firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';


export default function Login() {

  const navigation = useNavigation();
  const tRecuperar = () => {
    navigation.navigate('Recuperar')
  }

  //Hook Para Verificar o status da authenticação do usuário.
  useEffect(() => {
    const unsubscribe = FIREBASE_AUTH.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Principal");
      }
    });
    return unsubscribe;
  }, []);

  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const SignUInAuth = FIREBASE_AUTH;
  
  //Login do usuário com Firebase
  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(SignUInAuth, email, pass);
      console.log(response);
      // alert('Cadastrado com sucesso!');
    } catch (error) {
      console.log(error);
      alert('Falha no login: ' + error.message)
    }
  };

    return (
      <TouchableWithoutFeedback onPress={handlerTeclado}>
        <View style={styles.container}>
        <Image style={styles.img}
            source={require('../assets/Logo.png')}
          />
        
        <Input holder={'Usuário'} valor={email} onChangeText={setEmail}></Input>

        <Input holder={'Senha'} valor={pass} onChangeText={setPass}></Input>

        <Botao texto={'Entrar'} onPress={handleLogin}></Botao>

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
     },
     img: {
      marginBottom: 30,
      width: 240,
      height: 250, 
      marginTop: 50
      
    }

  });
  



