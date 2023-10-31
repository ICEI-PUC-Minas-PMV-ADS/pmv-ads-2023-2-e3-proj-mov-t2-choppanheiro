import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';




export default function Recuperar() {
    return (
        <View style={styles.container}>
   

        <Text style= {styles.text }>Esqueceu sua senha ?</Text>
        <Text style= {styles.text }>Uma senha temporaria foi enviada para o email cadastrado. Após logar, altere a senha em sua conta</Text>
  
        <StatusBar style="auto" />
      </View>

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
  

