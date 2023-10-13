import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const realizarLogin = async () => {
    try {
      // Recupere os dados do usuário do AsyncStorage
      const storedUsuario = await AsyncStorage.getItem('usuario');
      const storedSenha = await AsyncStorage.getItem('senha');

      if (usuario === storedUsuario && senha === storedSenha) {
        alert('Login bem-sucedido!');
        // Redirecione para a próxima tela após o login bem-sucedido
        navigation.navigate('TelaPosLogin');
      } else {
        alert('Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      alert('Ocorreu um erro durante o login. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Adicione aqui o seu componente de imagem, se necessário */}
      <Text style={styles.text}>Choppanheiros</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Usuário</Text>
        <TextInput
          style={styles.input}
          value={usuario}
          onChangeText={setUsuario}
        />
        <Text style={styles.inputLabel}>Senha</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={[styles.button, { marginBottom: 20 }]} onPress={realizarLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>CANCELAR</Text>
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
    color: 'white',
    fontFamily: 'Risque',
    fontSize: 34.41,
    marginBottom: 40,
  },
  inputContainer: {
    width: 300,
  },
  inputLabel: {
    color: 'white',
    marginBottom: 5,
    textAlign: 'left',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#F2A60C',
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#410404',
  },
});

export default Login;
