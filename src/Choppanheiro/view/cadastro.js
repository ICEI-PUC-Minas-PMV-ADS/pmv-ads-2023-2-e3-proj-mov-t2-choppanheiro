import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, } from 'react-native';
import {Botao, Input, handlerTeclado} from '../components/components';
import { useState, useEffect } from 'react';

import { FIREBASE_AUTH } from '../Firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';


export default function SignUp() {

  const navigation = useNavigation();

  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [vpass, setVPass] = useState();
  const [email, setEmail] = useState();

  const SignUpAuth = FIREBASE_AUTH;

  //Hook Para Verificar o status da authenticação do usuário.
  useEffect(() => {
    const unsubscribe = FIREBASE_AUTH.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  //Criação de usuário Firebase
  const handleSignUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(SignUpAuth, email, pass);
      console.log(response);
      alert('Cadastrado com sucesso!');
    } catch (error) {
      console.log(error);
      alert('Falha no cadastro: ' + error.message)
    }
  };

  <Input holder={'Usuário'} valor={user} onChangeText={setUser}></Input>

    return (
        <TouchableWithoutFeedback onPress={handlerTeclado}>
        <View style={styles.container}>
        <Image style={styles.img}
            source={require('../assets/Logo.png')}
          />
        
        {/* <Text style={styles.text}>Usuário</Text>
        <Input holder='Insira seu usuário' valor={user} onChangeText={setUser}></Input> */}

        <Text style={styles.text}>E-mail</Text>
        <Input holder='Insira seu email' valor={email} onChangeText={setEmail}></Input>

        <Text style={styles.text}>Senha</Text>
        <Input holder='Insira sua senha' valor={pass} onChangeText={setPass}></Input>

        {/* <Text style={styles.text}>Confirmar Senha</Text>
        <Input holder='Confirme sua senha' valor={vpass} onChangeText={setVPass}></Input> */}

        <Botao texto={'CRIAR CONTA'} onPress={handleSignUp} ></Botao>

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
  
