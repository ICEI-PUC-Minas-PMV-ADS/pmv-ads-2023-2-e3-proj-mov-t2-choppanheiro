import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Botao} from '../components/components';
import { useNavigation } from '@react-navigation/native';




export default function Principal() {

  const navigation = useNavigation();

  const tMesa = () => {
    navigation.navigate('Mesa')
  }

    return (
        <View style={styles.container}>

        <Botao texto={'ABRIR MESA'} onPress={tMesa} ></Botao>
  
  
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
  
