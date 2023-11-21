import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { Botao, Input, handlerTeclado, InputSecure } from '../components/components';
import { useState } from 'react';
import { Cadastrar } from '../controller/controller';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [vpass, setVPass] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigation = useNavigation();

  const handleCadastro = async () => {
    const credenciais = {
      user,
      pass,
      vpass,
      email
    };

    try {
        const cadastroBemSucedido = await Cadastrar(credenciais);
  
        if (cadastroBemSucedido) {
          Alert.alert('Erro no Cadastro', 'Verifique suas credenciais e tente novamente.');
        } else {
            Alert.alert('Cadastro concluído', 'Seu cadastro foi concluído com sucesso.', [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('Login'), // Redirecionar para a tela Home
                },
              ]);
            }
      } catch (error) {
        console.error('Erro durante o cadastro', error);
        Alert.alert('Erro no Cadastro', 'Ocorreu um erro durante o cadastro. Por favor, tente novamente.');
      }
    };

  return (
    <TouchableWithoutFeedback onPress={handlerTeclado}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('../assets/Logo.png')}
        />

        <Text style={styles.text}>Usuário</Text>
        <Input holder='Insira seu usuário' valor={user} onChangeText={setUser} />

        <Text style={styles.text}>E-mail</Text>
        <Input holder='Insira seu email' valor={email} onChangeText={setEmail} />

        <Text style={styles.text}>Senha</Text>
        <InputSecure holder='Insira sua senha' valor={pass} onChangeText={setPass} />

        <Text style={styles.text}>Confirmar Senha</Text>
        <InputSecure holder='Confirme sua senha' valor={vpass} onChangeText={setVPass} />

        <Botao texto={'CRIAR CONTA'} onPress={handleCadastro} />

        {mensagem !== "" && <Text style={styles.mensagem}>{mensagem}</Text>}

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
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
    color: 'white',
  },

  img: {
    marginBottom: 30,
    width: 240,
    height: 250,
    marginTop: 50,
  },

  mensagem: {
    fontSize: 18,
    color: "#F2A60C",
    marginTop: 20,
  },
});
