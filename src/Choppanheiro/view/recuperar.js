import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image  } from 'react-native';




export default function Recuperar() {
    return (
        <View style={styles.container}>
          <Image style={styles.img}
            source={require('../assets/Logo.png')}
          />

        <Text style= {styles.textTitle }>Esqueceu sua senha ?</Text>
        <Text style= {styles.text }>Uma senha temporaria foi enviada para {"\n"}seu email cadastrado. Após logar, altere{"\n"} a senha em sua conta.</Text>
  
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
     },
     textTitle:{
      fontSize: 16,
      color:'white',
      marginBottom:16,
      fontWeight: 'bold',
     },
     img: {
      marginBottom: 50,
      width: 240,
      height: 250,      
      
    }

  });
  

