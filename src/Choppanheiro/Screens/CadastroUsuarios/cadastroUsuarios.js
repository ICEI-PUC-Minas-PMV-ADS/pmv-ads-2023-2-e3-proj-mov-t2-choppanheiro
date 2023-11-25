import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CadastroUsuarios = () => {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const navigation = useNavigation();

  const validarEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const verificarSenhas = async () => {
    if (!usuario || !email || !senha || !confirmarSenha) {
      alert('Por favor, preencha todos os campos.');
    } else if (!validarEmail(email)) {
      alert('Por favor, insira um email válido.');
    } else if (senha === confirmarSenha) {
      try {
        await AsyncStorage.setItem('usuario', usuario);
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('senha', senha);
        alert('Cadastro realizado com sucesso!');
        navigation.navigate('Home');
      } catch (error) {
        alert('Erro ao salvar dados. Tente novamente.');
      }
    } else {
      alert('As senhas não coincidem. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choppanheiros</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Usuário</Text>
        <TextInput
          style={styles.input}
          value={usuario}
          onChangeText={setUsuario}
        />
        <Text style={styles.inputLabel}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.inputLabel}>Senha</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
        <Text style={styles.inputLabel}>Confirmar Senha</Text>
        <TextInput
          style={styles.input}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={[styles.button, { marginBottom: 20 }]} onPress={verificarSenhas}>
        <Text style={styles.buttonText}>CRIAR CONTA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>VOLTAR</Text>
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

export default CadastroUsuarios;
