import { AtualizarDados } from "../controller/controller";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  Botao,
  Input,
  handlerTeclado,
  Profile,
} from "../components/components";

const MinhaConta = ({ navigation }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { id, email, currentPassword, newPassword, confirmPassword, name } =
      formData;

    if (newPassword !== confirmPassword) {
      console.log("As novas senhas não coincidem!");
      return;
    }

    const credenciais = {
      user: name,
      pass: currentPassword,
    };

    const novasCredenciais = {
      user: name,
      email: email,
      pass: newPassword,
      vpass: confirmPassword,
    };

    AtualizarDados(credenciais, novasCredenciais);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>

      <Text style={styles.title}>Minha conta</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={formData.name}
        onChangeText={(text) => handleChange("name", text)}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(text) => handleChange("email", text)}
      />

      <Text style={styles.label}>Senha atual</Text>
      <TextInput
        style={styles.input}
        value={formData.currentPassword}
        secureTextEntry
        onChangeText={(text) => handleChange("currentPassword", text)}
      />

      <Text style={styles.label}>Nova Senha</Text>
      <TextInput
        style={styles.input}
        value={formData.newPassword}
        secureTextEntry
        onChangeText={(text) => handleChange("newPassword", text)}
      />

      <Text style={styles.label}>Confirmar Senha</Text>
      <TextInput
        style={styles.input}
        value={formData.confirmPassword}
        secureTextEntry
        onChangeText={(text) => handleChange("confirmPassword", text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>ALTERAR DADOS</Text>
      </TouchableOpacity>
      </View>

      <Profile
        width={"100%"}
        bgColor={"#F2A60C"}
        navigation={navigation}
      ></Profile>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#410404",
    alignSelf: "flex-start",
    marginVertical: 20,
    marginTop:60
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width:300
  },
  button: {
    backgroundColor: "#F2A60C",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default MinhaConta;
