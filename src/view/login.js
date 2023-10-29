import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import {Botao, Input, handlerTeclado, TextoBotao} from '../components/components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useState } from 'react';



export default function Login() {

  const navigation = useNavigation();

  const tRecuperar = () => {
  navigation.navigate('Recuperar')
  };

  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  const handleEntrar = () => {
    const credenciais = {
      user,
      pass
    }

    chamada(credenciais)

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
  


  

const chamada = (credenciais) => {
  axios.get('http://192.168.100.58:3000/users')
  .then( (response) => {
    const userData = response.data;

    const validaLogin = userData.find((item) => credenciais.user === item.user & credenciais.pass === item.pass);
    
    if (validaLogin) {
       console.log('====ENTROU===')
       navigation.navigate('Principal')
     } else {
      console.log('===FALHOU===')
    }
  })
};


/*
const adiciona = () => {
    axios.post('http://192.168.100.58:3000/profile',
     {
        name : 'Ciclano'
    })
    .then(function () {
        console.log('==== Adionado ====');
    })
    .catch(function (error) {
        console.log(error);
    })
};

// console.log("=====BACKEND=====")

// axios.get('http://192.168.100.58:3000/profile')
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     // Handle the error
//     console.error(error);
//   });
*/

