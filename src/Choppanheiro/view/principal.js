import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Botao} from '../components/components';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


import { FIREBASE_AUTH } from '../Firebase/firebase';


export default function Principal() {

  const navigation = useNavigation();

  //Hook Para Verificar o status da authenticação do usuário.
  useEffect(() => {
    const unsubscribe = FIREBASE_AUTH.onAuthStateChanged((user) => {
      if (user === null) {
        navigation.navigate("Login");
      }
    });
    return unsubscribe;
  }, []);

  const tMesa = () => {
    navigation.navigate('Mesa')
  }

  // Signout do Firebase
  signOut = async () => {
    try {
        await FIREBASE_AUTH.signOut();
    } catch (e) {
        console.log(e);
    }
}

  return (
    <View style={styles.container}>

    
    <Botao texto={'ABRIR MESA'} onPress={tMesa} ></Botao>
    <Botao texto={'SAIR'} onPress={() => signOut()} ></Botao>


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
  
