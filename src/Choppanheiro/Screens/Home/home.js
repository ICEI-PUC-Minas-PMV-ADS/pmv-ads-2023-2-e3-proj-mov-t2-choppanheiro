import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


const Home = ({ navigation }) => {
  const criarConta = () => {
    navigation.navigate('CadastroUsuarios');
  };

  const login = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choppanheiros</Text>
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={criarConta}>
        <Text style={styles.buttonText}>CRIAR CONTA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#410404',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontFamily: 'Risque',
    fontSize: 34.41,
    marginBottom: 40,
  },
  button: {
    elevation: 2,
    backgroundColor: '#F2A60C',
    width: 229,
    height: 56,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontFamily: 'Poppins',
    fontWeight: '600',
    color: '#410404',
    textAlign: 'center',
  },
});

export default Home;
