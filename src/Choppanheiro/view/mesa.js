import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Botao, Profile} from '../components/components';
import { useNavigation } from '@react-navigation/native';




export default function Mesa() {

  const navigation = useNavigation();

  const tLogin = () => {
    navigation.navigate('Login')
  };

  const tCadastro = () => {
    navigation.navigate('Cadastro')
  }

  return (
    <View style={styles.container}>
      <View style={{alignItems:'center', position:'absolute', padding:20, backgroundColor:'#FFFFFF', borderRadius: 10}}>
      {/* Linha 1 */}
      <View style={styles.rowContainer}>
        <Botao texto={'NO DE PESSOAS'} style={{width:229}}  /*onPress={tCadastro}*/ />
      </View>
  
      {/* Linha 2 */}
      <View style={styles.rowContainer}>
        <Botao texto={'COUVERT'}  style={{margin:1}}/*onPress={tCadastro}*/ />
        <Botao texto={'GORJETA'} /*onPress={tCadastro}*/ />
      </View>
  
      {/* Linha 3 */}
      <View style={styles.rowContainer}>
        <Botao texto={'FAZ A BOA'} style={{width:229}} /*onPress={tCadastro}*/ />
      </View>
  
      {/* Linha 4 */}
      <View style={styles.rowContainer}>
        <Botao texto={'GALERA'} style={{width:229}}  /*onPress={tCadastro}*/ />
      </View>
      </View>
      {/* Último Botão */}
      <Profile width={'100%'} bgColor={'#F2A60C'}></Profile>
  
      <StatusBar style="auto" />
    </View>
  );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EBEBEB',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    lastButtonContainer: {
      width: '100%',
      backgroundColor:'#F2A60C',
      marginTop: 'auto', // Empurra o último botão para o final da tela
    },
  });
  
